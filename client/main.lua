local blips = {}

getBlipEnabled = function(k)
    local kvp = GetResourceKvpString(tostring(k))
    return (kvp ~= nil and kvp == 'true') or (not kvp and Config.blips[k].defaultEnabled)
end

RegisterCommand('blips', function()
    local filteredBlips = {}
    for k, v in pairs(Config.blips) do
        filteredBlips[#filteredBlips + 1] = { enabled = getBlipEnabled(k), label = v.label,  id = k }
    end
    SendNUI('blipsMenu', { blips = filteredBlips })
    ShowNUI('setVisibleMenu', true)
end)

RegisterNuiCallback('blipVisibility', function(data)
    print(data.id, data.enable)
    SetResourceKvp(data.id, tostring(data.enable))
    refreshBlips()
end)

createBlip = function(coords, sprite, display, scale, color, label)
    local blip = AddBlipForCoord(coords)
    SetBlipSprite(blip, sprite)
    SetBlipDisplay(blip, display)
    SetBlipAsShortRange(blip, true)
    SetBlipScale(blip, scale)
    SetBlipColour(blip, color)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentSubstringPlayerName(label)
    EndTextCommandSetBlipName(blip)
    return blip
end

refreshBlips = function()
    Wait(500)
    for _, blipList in pairs(blips) do
        for _, blip in pairs(blipList) do RemoveBlip(blip) end
    end
    blips = {}
    for k, v in pairs(Config.blips) do
        blips[k] = {}
        if getBlipEnabled(k) then
            for a, b in pairs(v.locations) do
                blips[k][a] = createBlip(b, v.sprite, v.display, v.scale, v.color, v.label)
            end
        end
    end
end

CreateThread(refreshBlips)