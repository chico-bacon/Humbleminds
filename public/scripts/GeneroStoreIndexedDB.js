class GeneroStoreIndexedDB {
    conectar() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open("MyTestDatabase");
            request.onerror = (event) => {
                reject(new Error("Sem IndexedDB!"));
            };
            request.onsuccess = (event) => {
                resolve(event.target.result);
            };    
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                let generoStore = db.createObjectStore("generos", { keyPath: "id", autoIncrement: true });
                generoStore.createIndex("nome", "nome", { unique: true });
            }       
        })
        
    }

    async inserir(genero) {
        let db = await this.conectar();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["generos"], "readwrite");
            const objectStore = transaction.objectStore("generos");
            const request = objectStore.add(genero);
            request.onsuccess = function (event) {
                resolve(event);
            };
            request.onerror = function (event) {
                reject(new Error("Erro inserindo: " + event.target.error));
            };
        })
    }

    async listar() {
        let db = await this.conectar();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(["generos"], "readwrite");
            const objectStore = transaction.objectStore("generos");
            const request = objectStore.getAll();
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onerror = function (event) {
                reject(new Error("Erro inserindo: " + event.target.error));
            };
        })
    }


}