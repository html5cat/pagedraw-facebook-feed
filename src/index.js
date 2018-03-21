import React, { Component } from 'react';
import { render } from 'react-dom';

import Facebook from './pagedraw/facebook_container';

import _ from "lodash";
import moment from "moment";

let user = {name: "Michael", school: "Harvard", home_town: "San Francisco", profile_image: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"};
let page = {name: "Coding", image: "https://images.pexels.com/photos/36990/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"};
let main = {name: "Front end coders", message_content: "Everything is on fire", message: "Gabriel", people: "25", reach: "12", img_src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=940&h=650&auto=compress&cs=tinysrgb", my_page_img: "https://images.pexels.com/photos/36990/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb", suggested_img: "https://imgur.com/nD4c0na"};

class App extends Component {
  constructor() {
    super();
    this.setCommentField = this.setCommentField.bind(this)
    this.setPostField = this.setPostField.bind(this)
    this.handleNewComment = this.handleNewComment.bind(this)
    this.handleNewPost = this.handleNewPost.bind(this)
    this.likePost = this.likePost.bind(this)
    this.removeLike = this.removeLike.bind(this)

    this.state= {
      postField: "",
      posts: [{id: 123456, commentField: '', name: "Susan Smith", likes: ["Jared Pochtar", "Michael Dwyer"], time: moment("2018-02-05 10").format('x'), content: "Did you know that the 10 dollar founding father without a father got a lot farther by being a lot smarter?", user_profile_image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=940&h=650&auto=compress&cs=tinysrgb", comments: [
        {text_content: "First!", time: moment("2018-02-05 10").format('x'), profile_image: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?w=940&h=650&auto=compress&cs=tinysrgb", name: "Mark"},
        {text_content: "Second", time: moment("2018-02-05 11").format('x'), profile_image: "https://images.pexels.com/photos/212289/pexels-photo-212289.jpeg?w=940&h=650&auto=compress&cs=tinysrgb", name: "Lebron"}
      ]}]
    }
  }

  handleNewPost() {
    let newPosts = [{id: Math.floor(Math.random() * 1000000), name: user.name, commentField: '', likes: [], time: Date.now().toString(), content: this.state.postField, user_profile_image: user.profile_image, comments: []}].concat(this.state.posts);
    this.setState({posts: newPosts, postField: ""});
  }

  handleNewComment(postId) {
    let index = this.state.posts.findIndex((post) => post.id === postId);
    let oldPost = this.state.posts[index];
    let newPost = _.extend({}, oldPost, {commentField: "", comments: oldPost.comments.concat({name: user.name, text_content: oldPost.commentField, time: Date.now().toString(), profile_image: user.profile_image})});
    let newPosts = _.cloneDeep(this.state.posts);
    newPosts[index] = newPost;

    this.setState({posts: newPosts});
  }

  setPostField(value) {
    this.setState({
      postField: value
    })
  }

  setCommentField(postId, value) {
    let postIndex = this.state.posts.findIndex((post) => post.id === postId);
    let newPosts = _.cloneDeep(this.state.posts);
    newPosts[postIndex] = _.extend({}, this.state.posts[postIndex], {commentField: value});

    this.setState({posts: newPosts});
  }

  likePost(postId) {
    let postIndex = this.state.posts.findIndex((post) => post.id === postId);
    let likes = _.cloneDeep(this.state.posts[postIndex].likes);
    let oldPost = this.state.posts[postIndex];
    likes.push(user.name);
    let newPost = _.extend({}, oldPost, {likes});
    let newPosts = _.cloneDeep(this.state.posts);
    newPosts[postIndex] = _.extend({}, oldPost, {likes});

    this.setState({posts: newPosts});
  }

  removeLike(postId) {
    let postIndex = this.state.posts.findIndex((post) => post.id === postId);
    let likes = _.cloneDeep(this.state.posts[postIndex].likes);
    let oldPost = this.state.posts[postIndex];
    likes.splice(likes.indexOf(user.name), 1)
    let newPosts = _.cloneDeep(this.state.posts);
    newPosts[postIndex] = _.extend({}, oldPost, {likes});

    this.setState({posts: newPosts});
  }

  render() {
    let posts = _.cloneDeep(this.state.posts);
    posts = posts.map((post) => {
      post.time = moment(Number(post.time)).fromNow()
      post.isLiked = (post.likes.indexOf(user.name) !== -1).toString()
      if (post.likes.length === 1) {
        post.likes = `${post.likes[0]} likes this`;
      } else if (post.likes.length === 2) {
        post.likes = `${post.likes.join(" and ")} like this`;
      } else if (post.likes.length > 2) {
        console.log(`${_.first(post.likes)} and ${post.likes.length -1} others like this`);
        post.likes = `${_.first(post.likes)} and ${post.likes.length -1} others like this`;
      }
      post.comments = post.comments.map((comment) => {
        comment.time = moment(Number(comment.time)).fromNow();
        return comment;
      });

      return post;
    });

    return (
      <div className="App">
        <Facebook user={user}
                  page={page}
                  main={main}
                  posts={posts}
                  postField={this.state.postField}
                  handleNewComment={this.handleNewComment}
                  handleNewPost={this.handleNewPost}
                  setCommentField={this.setCommentField}
                  setPostField={this.setPostField}
                  likePost={this.likePost}
                  removeLike={this.removeLike}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
