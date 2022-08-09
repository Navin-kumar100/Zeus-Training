import {IMain, IDatabase} from 'pg-promise';
import  pgPromise from 'pg-promise';

const pgp : IMain = pgPromise({
    query(e: any) {
        console.log('QUERY RESULT:', e.query);
    },
    receive(data: any, result: any, e: any) {
        console.log(`DATA FROM QUERY ${e.query} WAS RECEIVED.`);
    }
});

const connection: any = {
    host: 'localhost',
    port: 5432,
    database: 'modo_api',
    user: 'postgres',
    password: 'manager'
}
const db: IDatabase<any> = pgp(connection);
export {
    db
};