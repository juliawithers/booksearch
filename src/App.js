import React, { Component } from 'react';
import './App.css'
import Form from './Form'
import MainList from './MainList'

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
      filter:"no-filter",
      printType:"all",
      query: "henry",
    };
  }
  
  
  changeQuery = (q) => {
    this.setState({
      query: q
    })
  }

  changePrintType = (selected) => {
    this.setState({
      printType:selected
    })
  }
  changeBookType = (selected) => {
    this.setState({
      filter:selected
    })
  }

  submitForm(e){
    e.preventDefault();
    let filter =
      this.state.filter !== "no-filter"
      ? '&filter='+this.state.filter
      : '';

    const url = 'https://www.googleapis.com/books/v1/volumes?&printType='+this.state.printType+'&maxResults=10'+filter+'&q='+this.state.query+'&key=AIzaSyDmOap_TrLPRDrMbRUGX3yPoGtt_oZljgk';

    console.log(url)
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {
      console.log(data)
      this.setState({
        bookList: data
      })
      ;
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err.message
        })
      })
  }

  render(){

    console.log(this.state)
    return (
      <div>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main className='App'>
        <Form 
          filter={this.state.filter}
          printType={this.state.printType}
          query={this.state.query}
          handleChangeQuery = {q=>this.changeQuery(q)}
          handleChangePrintType={selected=>this.changePrintType(selected)}
          handleChangeBookType={selected=>this.changeBookType(selected)}
          handleSubmitForm = {e=>this.submitForm(e)}/>
        <section>
          <MainList data = {this.state.bookList}/>
        </section>
      </main>
      </div>
    );
  }
}

