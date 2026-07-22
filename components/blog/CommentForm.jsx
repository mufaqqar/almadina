"use client";
import { useLanguage } from "../common/LanguageContext";

export default function CommentForm() {
  const { t } = useLanguage();
  return (
    <div id="respond" className="comment-respond">
      <h3 id="reply-title" className="comment-reply-title margin-bottom-25">
        {t("leaveComment").toUpperCase()}
      </h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="commentform"
        className="comment-form"
      >
        <div className="text-wrap clearfix">
          <fieldset className="name-wrap">
            <input
              type="text"
              id="author"
              className="tb-my-input"
              name="author"
              required
              tabIndex={1}
              placeholder={t("yourName")}
              defaultValue=""
              size={32}
              aria-required="true"
            />
          </fieldset>
          <fieldset className="email-wrap">
            <input
              type="email"
              id="email"
              className="tb-my-input"
              name="email"
              tabIndex={2}
              placeholder={t("yourEmail")}
              defaultValue=""
              size={32}
              aria-required="true"
            />
          </fieldset>
        </div>
        <fieldset className="message-wrap">
          <textarea
            id="comment-message"
            name="comment"
            rows={8}
            tabIndex={4}
            placeholder={t("yourComment")}
            aria-required="true"
            defaultValue={""}
          />
        </fieldset>
        <p className="form-submit">
          <input
            name="submit"
            type="submit"
            id="comment-reply"
            className="submit"
            readOnly
            value={t("postComment")}
          />
          <input
            type="hidden"
            name="comment_post_ID"
            defaultValue={100}
            id="comment_post_ID"
          />
          <input
            type="hidden"
            name="comment_parent"
            id="comment_parent"
            defaultValue={0}
          />
        </p>
      </form>
    </div>
  );
}
