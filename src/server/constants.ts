import { envsafe, str, url } from 'envsafe';

export const env = envsafe({
    AUTH_GITHUB_ID: str({
        desc: 'GITHUB client iD',
    }),
    AUTH_GITHUB_SECRET: str({
        desc: 'Github client secret',
    }),
    AUTH_SECRET: str({
        desc: 'Secret to sign JWT tokens with',
    }),
    DATABASE_URL: str({
        desc: 'Database URL',
    }),
    RAILWAY_TEAM_TOKEN: str({
        desc: 'Railway team token',
    }),
    RAILWAY_API: url({
        desc: 'Railway API URL',

    }),
    RAILWAY_TEAM_ID: str({
        desc: 'Railway team ID',
    }),
    REDIRECT_URI: url({
        devDefault: 'http://localhost:3000/api/oauth',
        desc: 'Github OAuth redirect URL',
    }),

});