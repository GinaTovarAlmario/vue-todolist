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
            todoList: [
                {
                    text:'Dare da mangiare al cane',
                    isDone: true,
                },
                {
                    text:'Preparare il pranzo',
                    isDone:false,
                },
                {
                    text:'Lavare i piatti',
                    isDone:false,
                },
                {
                    text:'Fare la spesa',
                    isDone:true,
                },
                {
                    text:'Ripassare appunti',
                    isDone:false,
                },
                {
                    text:'Fare pilates',
                    isDone:true,
                },
                {
                    text:'Fare da babysitter a Bebo',
                    isDone:false,
                },
                {
                    text:'Cercare regalo per nipotino',
                    isDone:true,
                },
                {
                    text:'Ordinare la torta per compleanno Bebo',
                    isDone:false,
                },
                {
                    text:'Ordinare farmaci per genitori',
                    isDone:false,
                },
                {
                    text:'Vai a cena fuori',
                    isDone:true,
                },
                {
                    text:'Trova il tempo per avere una vita sociale',
                    isDone:false,
                },
                {
                    text:'Sopravvivi alla giornata',
                    isDone:false,
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
    }

}).mount('#app')