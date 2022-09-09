import router from '@/router'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    posts: null,
    post: null,
    comments: null,
    comment: null,
    Likedposts: [],
  },
  getters: {
  },
  mutations: {
    SetUsers(state, users) {
      state.user = users
    },
    SetUser(state, user) {
      state.user = user

    },
    SetToken(state, token) {
      state.token = token
    },
    SetPosts(state, posts) {
      state.posts = posts
    },
    SetPost(state, post) {
      state.post = post
    },
    SetComments(state, comments) {
      state.comments = comments
    },
    Logout(state) {
      state.user = "",
        state.token = ""
    },
    setLikedposts(state, Likedposts) {
      state.Likedposts = Likedposts;
    },
    updateLikedposts: (state, post) => {
      state.Likedposts.push(post);
    },
    removeFromLikedposts: (state, Likedposts) => {
      state.Likedposts = Likedposts;
    },
  },
  actions: {
    //users
    ShowUsers: async (context) => {
      const res = await fetch("https://home-view-api.herokuapp.com//users", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const UsersArray = await res.json();
      console.log(UsersArray);
      context.commit("SetUsers", UsersArray);
    },

    Verify: async (context, token) => {
      const res = await fetch("https://home-view-api.herokuapp.com/users/users/verify", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': `${token}`
        },
      })
        .then(res => res.json())
        .then(userDetails => {
          console.log(userDetails.user);
          context.commit("SetUser", userDetails.user)
        })

      // router.push({
      //   name:"posts"
      // })
    },

    Login: async (context, payload,) => {
      const res = await fetch("https://home-view-api.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(tokendata => {
          console.log(tokendata);
          console.log(tokendata.token);

          //if (data.token){}
          context.commit("SetToken", tokendata.token)
        });
      // const ver = app.methods.Verify(context,token)
      //   return ver
    },

    Register: async (context, payload) => {
      const {name, email,} = payload
      await fetch("https://home-view-api.herokuapp.com/users/register", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          context.commit("SetToken", json.token)
          context.commit("setUser", json);
        })
    },

    updateUser: async (context, payload) => {
      console.log(payload)
      fetch(`https://home-view-api.herokuapp.com/users/` + payload, {
        mode: "cors",
        method: "PUT",
        body: JSON.stringify(
          {
            name: payload.name,
            surname: payload.surname,
            email: payload.email,
            password: payload.password,
            username: payload.username,
            contact: payload.contact,
            type: payload.type,
            profilePicture: payload.profilePicture,
          }
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("setUser"));
    },

    //posts
    AddPost: async (context, Land) => {
      console.log(Land);
      const res = await fetch("https://home-view-api.herokuapp.com/blogposts", {
        method: "POST",
        body: JSON.stringify({
          Post: Land.Post
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const added_post = res.json();
      console.log(added_post);
    },
    ShowPosts: async (context) => {
      const res = await fetch("https://home-view-api.herokuapp.com/blogposts", {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postsArray = await res.json();
      console.log(postsArray);
      context.commit("SetPosts", postsArray);
    },
    GetPost: async (context, id) => {
      const res = await fetch("https://home-view-api.herokuapp.com/blogposts/" + id, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const postArray = await res.json();
      console.log(postArray);
      context.commit("SetPost", postArray);
    },
    DeletePost: async (id) => {
      const res = await fetch("https://home-view-api.herokuapp.com/blogposts/" + id, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json());
      const commentDeleted = res.json();
      console.log(commentDeleted);

    },

    //likedposts
    getLikedposts: async (context) => {
      fetch(`https://home-view-api.herokuapp.com/blogposts`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setPosts", data);
            // console.log(data);
          }
        });
    },
    // addToLikedposts: async (context, id) => {
    //   console.log(id);


      // this.state.cart.product.push(id);
      // context.dispatch("updateCart", this.state.cart);
    // },
    deleteFromLikedposts: async (context, id) => {
      const newLikedposts = context.state.Likedposts.filter(
        (post) => post.id != id
      );

      context.commit("removeFromLikedposts", newLikedposts);
    },

    //comments
    ShowComment: async (context, id) => {
      const res = await fetch("https://home-view-api.herokuapp.com/comments/blogposts/" + id, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const comments_Array = await res.json();
      console.log(comments_Array);
      context.commit("SetComments", comments_Array);
    },

    AddComment: async (context, payload) => {
      const res = await fetch("https://home-view-api.herokuapp.com/comments", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const commentAdded = await res.json();
      console.log(commentAdded);
    },

    DeleteComment: async (context, id) => {
      // console.log(payload);
      await fetch(`https://home-view-api.herokuapp.com/comments/` + id, {
        mode: "cors",
        method: "DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

        // const deleted_comment = res.json()
        // .then((res) => deleted_comment);
        // console.log(res);
        .then((response) => response.json())
        .then(() => context.commit("SetComments"));

      // console.log(deleted_comment);
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})