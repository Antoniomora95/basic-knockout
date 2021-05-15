function AppViewModel() {
    let self = this;
    self.newNote = ko.observable('');
    self.listNotes = ko.observableArray(
        [
            {uid: 0, name:'January..'},
            {uid: 1, name:'February'},
            {uid: 2,name:'March'},
        ]
        );
    self.invalidNote = ko.observable(false)

    self.handleFormSubmit = (s)=>{
        //let note = this.newNote()
        let currentNote = self.newNote();
        let validNote =  currentNote && currentNote.length && currentNote.length >=3;

        let capitalize = (str) => {
            str = str.trim()
            return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
        }
        currentNote = capitalize(currentNote)
        if(validNote){
            self.invalidNote(false)
            self.listNotes.push({ uid: self.listNotes().length -1 , name: currentNote})
            self.newNote('')
        } else {
            self.invalidNote (true)
        }
    }
    self.handleDeleteNote = (item, event) => {
        console.log(self.listNotes(), item)
        self.listNotes.splice(item.uid, 1)
    }
}

ko.applyBindings(new AppViewModel())