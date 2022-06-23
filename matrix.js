class Matrix{
    constructor(rows, cols){
        this.rows = rows;//quantidade de linha
        this.cols = cols;//quantidade de colunas

        this.data = []

        for(i=0;i<rows;i++){
            let err = []//valores da matrix
            for(j=0;j<rows;j++){
                Array.push(Math.floor(Math.random()*10))
            }
        }
    }
}