fx_version 'cerulean'
description 'FiveM Blips manager script'
author 'Marttins | MT Scripts'
lua54 'yes'
game 'gta5'

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua',
}

client_scripts {
    'client/**/*',
}

ui_page 'web/build/index.html'

files {
	'web/build/index.html',
	'web/build/**/*',
    'web/assets/**/*',
}

escrow_ignore {
    'server/functions.lua',
    'client/functions.lua',
    'config.lua',
}