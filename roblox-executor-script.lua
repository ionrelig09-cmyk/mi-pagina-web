local function loadScript()
    local success, script = pcall(function()
        return game:HttpGet("https://raw.githubusercontent.com/ionrelig09-cmyk/roblox-executor-script/main/roblox-executor-script.lua")
    end)
    
    if success then
        local loaded, error = loadstring(script)
        if loaded then
            local result, err = pcall(loaded)
            if result then
                game.StarterGui:SetCore("ChatMakeSystemMessage", {
                    Text = "[ADMIN] Script cargado correctamente.";
                    Color = Color3.new(0, 1, 0);
                })
            else
                game.StarterGui:SetCore("ChatMakeSystemMessage", {
                    Text = "[ADMIN] Error al ejecutar el script: " .. tostring(err);
                    Color = Color3.new(1, 0, 0);
                })
            end
        else
            game.StarterGui:SetCore("ChatMakeSystemMessage", {
                Text = "[ADMIN] Error al compilar el script: " .. tostring(error);
                Color = Color3.new(1, 0, 0);
            })
        end
    else
        game.StarterGui:SetCore("ChatMakeSystemMessage", {
            Text = "[ADMIN] Error al cargar el script: " .. tostring(script);
            Color = Color3.new(1, 0, 0);
        })
    end
end

loadScript()
