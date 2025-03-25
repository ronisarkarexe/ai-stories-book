import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateCommentMutation,
  useGetCommentsListQuery,
} from "../../redux/apis/comment";
import { isLoggedIn } from "../../services/auth.service";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  comment: string;
};

interface IPostCommentComponentProps {
  postId: string;
}

const PostCommentComponent: React.FC<IPostCommentComponentProps> = ({
  postId,
}) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const isLogin = isLoggedIn();

  const { data: commentList } = useGetCommentsListQuery(postId);
  const [createComment] = useCreateCommentMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isLogin) {
      toast.error("Please login to post a comment.");
      return;
    }
    if (data.comment === "") {
      toast.error("Please enter a comment. at last 5 words...");
      return;
    }
    const createPostComment = {
      postId: postId,
      comment: data.comment,
    };
    setIsBusy(true);
    try {
      const res = await createComment({ ...createPostComment }).unwrap();
      if (res) {
        toast.success("Comment posted successfully!");
        reset();
      }
    } catch (err: unknown) {
      console.log("error: ", err);
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("comment")}
          className="w-full border border-gray-400 rounded-lg p-4 focus:ring-custom focus:border-custom"
          rows={3}
          placeholder="Add your comment..."
        ></textarea>
        <button
          type="submit"
          className={`!rounded-button mt-4 text-gray-300 px-6 py-2 text-sm font-medium ${
            isBusy
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-700 cursor-pointer"
          }`}
          disabled={isBusy}
        >
          {isBusy ? "Posting..." : "Post Comment"}
        </button>
      </form>
      <h3 className="text-xl font-semibold mb-6">
        Comments ({commentList?.totalComments})
      </h3>
      <div className="space-y-6">
        {commentList?.comments.map((comment) => (
          <div className="flex space-x-4">
            <img src="" alt="Commenter" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="bg-slate-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{comment.userId.name}</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
              <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                <button className="hover:text-custom">
                  <i className="far fa-heart mr-1"></i> {comment.likes.length}
                </button>
                {/* <button className="hover:text-custom">
                  <i className="far fa-comment mr-1"></i> Reply
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default PostCommentComponent;
