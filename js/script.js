/**
 * Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato
viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
(se done era uguale a false, impostare true e viceversa)
 */

const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoContent:'',
            todoList: [
                {
                    text:'Dare da mangiare al cane',
                    done: true,
                },
                {
                    text:'Preparare il pranzo',
                    done:false,
                },
                {
                    text:'Lavare i piatti',
                    done:false,
                },
                {
                    text:'Fare la spesa',
                    done:true,
                },
                {
                    text:'Ripassare appunti',
                    done:false,
                },
                {
                    text:'Fare pilates',
                    done:true,
                },
                {
                    text:'Fare da babysitter a Bebo',
                    done:false,
                },
                {
                    text:'Cercare regalo per nipotino',
                    done:true,
                },
                {
                    text:'Ordinare la torta per compleanno Bebo',
                    done:false,
                },
                {
                    text:'Ordinare farmaci per genitori',
                    done:false,
                },
                {
                    text:'Vai a cena fuori',
                    done:true,
                },
                {
                    text:'Trova il tempo per avere una vita sociale',
                    done:false,
                },
                {
                    text:'Sopravvivi alla giornata',
                    done:false,
                },
            ]
        }
    },
    methods:{
        deleteTodoItem(todoItemIndex){
            console.log(todoItemIndex);
            // devo ora fare in modo di rimuovere elemento dalla lista
            this.todoList.splice(todoItemIndex,1);
            // faccio un controllo su elemento cancellato
            console.log(`l'elemento ${todoItemIndex} è stato eliminato!`);
        },
        addNewTodoItem(content){
            // ho un array di oggetti con due proprietà
            this.todoList.push({text:content, done:false});
            this.clearTodoInput();
        },
        clearTodoInput(){
            this.newTodoContent='';
        },
        toggleDone(todoItemIndex){
            this.todoList[todoItemIndex].done = !this.todoList[todoItemIndex].done; 
        },
        
    }
}).mount('#app')