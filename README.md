This is my pratical Assigment for VizExplorer, here I used React because it was the framework 
that I've been studying for the last months.
Used bootstrap for styling, used Webpack and babel to transcribe the react and ES6.

Didn't put the data in alphabetic order and make the fields on the modal required.

Examples:

         componentDidMount (){
        fetch("/data.json").then((data) =>{
            return data.json()
        }).then((json) => {
            this.setState({row: json})
        })
    }

    onClickCancel(){
        this.setState({showModal:false})}

    onClickSubmit(data){
        const previousrows = this.state.row
        this.setState({row: [data,...previousrows],showModal:false})

        
