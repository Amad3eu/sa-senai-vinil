import mariadb from 'mariadb'

export class userPurchase {
    public firstName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public price : any;

    constructor(firstName: string, lastName: string, email: string, address: string, price : any) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.address = address
        this.price = price
    }

    public async purchaseItem(){
        const pool = mariadb.createPool({
            host: 'localhost',
            database: 'goldies_sa',
            password: 'carloseduardo08',
            user: 'root'
        })
        try{
            let conn = await pool.getConnection()
            let id = await conn.query(`SELECT id FROM usuario WHERE nome = ${this.firstName}`)
            let userId = id[0]['id']
            await conn.query(`INSERT INTO compras (id_user, endereco, presente, preco_total, forma_pag) VALUES (?, ?, 1, ?, "credito")`,
            [userId, this.address, this.price])
            let compraId = await conn.query('')
            let idDisco = await conn.query('')
            await conn.query('INSERT INTO')
        }
        catch(err){
            return 'Não foi possível, por favor tente novamente'
        }
    }
}
