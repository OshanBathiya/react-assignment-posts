import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Show only a part of the body in the card */}
            {post.body.substring(0, 80)}...
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostCard;
