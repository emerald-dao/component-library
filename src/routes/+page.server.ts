import type { Actions } from './$types'

export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get("theme");
        console.log('Theme in cookies', theme)
        if (theme) {
            cookies.set('theme', theme, {
                path: '/',
                maxAge: 60 * 60 * 24 * 365
            })
        }
    }
};