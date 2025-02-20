import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/api";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCard";
import { Container, Grid2, Typography, CircularProgress } from "@mui/material";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch all posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  //filter posts by both title and body
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography color="error">Error: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Posts
      </Typography>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Grid2 container spacing={2}>
        {filteredPosts.map((post) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={post.id}>
            <PostCard post={post} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default PostsList;
