import { atom } from 'recoil';
export const darkTheme = atom(
    {
        key: 'darkTheme',
        default: true
    }
)

export const wsInstance = atom({
    key: 'wsInstance',
    default: ((typeof window) !== "undefined") ? new WebSocket("ws://127.0.0.1:7080") : null
}
)
