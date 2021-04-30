/*Consignes: Reproduire ce formulaire en HTML/CSS + ReactJS

A la soumission du formulaire, ajouter les données entrantes dans un tableau "comments" situé dans l'objet state.
Ex:
comments: [
{ name: "JB", message: "Youhou la famille!"},
{ name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
]*/






class App extends React.Component {
  
    
    state = {
        name: "",
        message: "",
        comments:[
            
        ],
    }
    
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    

    keepComment = (event) => {
        event.preventDefault();

        let newComment = [`name:${this.state.name}, message: ${this.state.message}`]

        this.setState({
            name:'',
            message:'',
            comments: newComment
        })
    }

    render() {
        return (
            <div className="app">
                <form className="form">
                    <label htmlFor="name">Say something </label>

                    <input type="text" id="nameInput" 
                        onChange={this.changeName}
                        value={this.state.name} placeholder="Your Name" />
                    
                    <input type="textarea" id="messageInput" 
                        onChange={this.changeMessage}
                        value={this.state.message} placeholder="Your Comment" />

                    <input onClick={this.keepComment}
                    type="submit" value="Comment>" id="btn"/>
          
                </form>
            </div>
        )
    }


}
ReactDOM.render(<App/>, document.querySelector('#app'));



