import React, { useState, useEffect } from "react"
import { DEFAULT_THEME, Divider, Paper, Text, Group, Switch, ScrollArea } from '@mantine/core'
import { modals } from '@mantine/modals'
import { fetchNui } from "../utils/fetchNui"
import { useNuiEvent } from "../hooks/useNuiEvent"

interface Blips {
    id: number,
    label: string,
    enabled: boolean
}

const Menu: React.FC = () => {
    const theme = DEFAULT_THEME
    const [blips, setBlips] = useState<Blips[]>([])

    useNuiEvent<any>('blipsMenu', (data) => {
        setBlips(data.blips)
    })

    return (
        <div style={{ width: '100%', height: '100%', position: 'fixed', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Paper w={350} h={600} withBorder radius="sm" style={{ margin: 15, backgroundColor: theme.colors.dark[8] }}>
                <Text size="xl" fw={700} style={{ padding: 5 }}>Blips</Text>
                <Divider/>
                <ScrollArea scrollbarSize={2} scrollHideDelay={0} h={550} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: 5 }}>
                    {blips.length > 0 && blips.map(({ label, id, enabled }) => (
                        <Group w="100%" style={{ display: 'flex', justifyContent: 'space-between', padding: 5, backgroundColor: theme.colors.dark[7], borderRadius: theme.radius.sm, marginBottom: 5 }}>
                            <Text size="sm">{label}</Text>
                            <Switch size="xs" color="teal" defaultChecked={enabled} onChange={(event) => { fetchNui('blipVisibility', { enable: event?.currentTarget.checked, id: id }) }}/>
                        </Group>
                    ))}
                </ScrollArea>
            </Paper>
        </div>
    )
}

export default Menu