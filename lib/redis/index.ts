import Redis from 'ioredis'

const port = process.env.REDISPORT as string
const host = process.env.REDIURL as string
const user = process.env.REDISUSER as string
const key = process.env.REDISPKEY as string


    function redisConnect(){
        const redis = new Redis({
            port:Number(port),
            host: host, // Redis host
            username: user, // needs Redis >= 6
            password: key,
            db: 0, // Defaults to 0
    }); 

    return redis
}

export default redisConnect

