import { fetchSinglePost } from "../api/fetchSinglePost.js";
import { displaySinglePost } from "../ui/posts/displaySinglePost.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import { getQueryParam } from "../helpers/getQueryParam.js";

export async function handleSinglePostDisplay() {
  const loadingElement = document.querySelector("#loading-wrapper");
  const postId = getQueryParam("id");
  if (!postId) {
    window.location.href = "/";
  }

  try {
    const post = await fetchSinglePost(postId);
    displaySinglePost(post);
  } catch (error) {
    displayMessage("#message-container-single-post", `Oops, something didn't work as we planned. Error: ${error.message}`, "error");
  } finally {
    loadingElement.classList.add("hidden");
  }
}
