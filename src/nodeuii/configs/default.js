import path from 'path';
const config = {
    port: process.env.PORT || 3000,
    controllerConf: path.join(__dirname, '../controllers/'),
    assetsConf: path.join(__dirname, '../assets'),
    viewsConf: path.join(__dirname, '../views'),
    log: {
        appenders: [
            {
                type: "console"
            },
            {
                type: "clustered",
                appenders: [
                    {
                        type: "dateFile",
                        filename: "http.log",
                        pattern: "-yyyy-MM-dd",
                        category: "http"
                    },
                    {
                        type: "file",
                        filename: "app.log",
                        maxLogSize: 10485760,
                        numBackups: 5
                    },
                    {
                        type: "logLevelFilter",
                        level: "ERROR",
                        appender: {
                            type: "file",
                            filename: "errors.log"
                        }
                    }
                ]
            }
        ]
    },
};

export default config;