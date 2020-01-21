import Vue from 'vue'

export const getPosts = (query, { commit }) => {
  fetch(query)
    .then(response => response.json())
    .then(data =>
      data.data.children.forEach(child => this.posts.push(child.data))
    )
}
