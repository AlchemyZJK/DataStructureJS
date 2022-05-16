class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!(c in cur.children)) {
        cur.children[c] = new Node();
      }
      cur = cur.children[c];
    }
    cur.isWord = true;
  }

  contain(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!(c in cur.children)) {
        return false;
      }
      cur = cur.children[c];
    }
    return cur.isWord;
  }

  startWithPrefix(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];
      if (!(c in cur.children)) {
        return false;
      }
      cur = cur.children[c];
    }
    return true;
  }
  
}