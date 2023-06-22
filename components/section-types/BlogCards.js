"use client";

import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  containerMotion,
  fadeInFromRight,
} from "@/lib/framer-animations";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Media from "../Media";
import Link from "next/link";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import {
  formatDateAndTime,
  formatMachineReadableDateTime,
} from "@contentful/f36-datetime";
import { formatAuthorName } from "@/lib/blog";

const customContentOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-2 line-clamp-3 text-gray-700 md:text-lg">{children}</p>
    ),
  },
};

export default function BlogCards({ blogPosts }) {
  // split the customContentCollection into arrays of 4
  const splitBlogsArray = (blogPosts) => {
    const blogPostArrays = [];
    let tempArray = [];
    blogPosts?.forEach((item, index) => {
      tempArray.push(item);
      if (index % 4 === 3) {
        blogPostArrays.push(tempArray);
        tempArray = [];
      }
    });
    if (tempArray.length > 0) {
      blogPostArrays.push(tempArray);
    }

    return blogPostArrays;
  };

  const blogArrays = splitBlogsArray(blogPosts);

  const [currentBlogArrayIndex, setBlogArrayIndex] = useState(0);

  return (
    <motion.section
      variants={containerMotion}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <div className="container flex max-w-screen-xl flex-col gap-y-4 py-6 md:py-8 lg:gap-y-8 lg:py-10">
        {blogArrays[currentBlogArrayIndex]?.map((blog) => {
          return (
            <Link
              key={`${blog?.sys?.id}${uniqid()}`}
              href={
                blog?.fields?.slug ? `/blog/${blog?.fields?.slug}` : "/blog"
              }
            >
              <motion.div
                className="group grid cursor-pointer gap-10 rounded-3xl bg-white p-4 transition-shadow hover:bg-gray-50 md:p-8 lg:grid-cols-12 xl:gap-x-12"
                variants={fadeInFromLeft}
                key={`${blog?.sys?.id}${uniqid()}`}
              >
                <motion.div
                  variants={fadeInFromRight}
                  className="relative lg:col-span-5"
                >
                  <Media media={blog?.fields?.image} />
                </motion.div>
                <div className="flex flex-col lg:col-span-7">
                  <div className="flex flex-col-reverse items-start gap-3 md:flex-row md:items-center">
                    {blog?.fields?.title && (
                      <p className="font-heading text-xl font-semibold capitalize tracking-wide text-gray-700 md:text-2xl">
                        {blog?.fields?.title}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    {blog?.fields?.date && (
                      <date
                        className="text-sm text-gray-500"
                        datetime={formatMachineReadableDateTime(
                          blog?.fields?.date,
                          "day"
                        )}
                      >
                        {formatDateAndTime(blog?.fields?.date, "day")}
                      </date>
                    )}
                    {blog?.fields?.categories &&
                      blog?.fields?.categories?.map((category) => (
                        <span
                          className="relative z-10 ml-3 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 md:text-base"
                          key={uniqid()}
                        >
                          {category}
                        </span>
                      ))}
                  </div>
                  {blog?.fields?.description && (
                    <div className="mt-3 overflow-y-hidden lg:mb-5">
                      {documentToReactComponents(
                        blog?.fields?.description,
                        customContentOptions
                      ).slice(0, 1)}
                    </div>
                  )}
                  <div className="flex w-full justify-between border-secondary-200 pt-7 text-gray-700 lg:mt-auto lg:border-t-2">
                    {blog?.fields?.authors?.map((author, index) => {
                      if (index === blog?.fields?.authors.length) {
                        return (
                          <span className="sr-only" key={uniqid()}>
                            {author},{" "}
                          </span>
                        );
                      }
                      return (
                        <span className="sr-only" key={uniqid()}>
                          {author}
                        </span>
                      );
                    })}

                    {blog?.fields?.authors && (
                      <div>
                        <span>by </span>
                        {blog?.fields?.authors?.map((author, index) => {
                          return formatAuthorName(
                            author,
                            blog?.fields?.authors,
                            index
                          );
                        })}
                      </div>
                    )}

                    <div className="ml-auto flex items-center gap-1 pr-4 text-lg text-primary-700 transition-opacity group-hover:opacity-100 lg:opacity-0">
                      <span>Read More</span>
                      <motion.span
                        animate={{ x: 10 }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="h-4 text-primary-700"
                      >
                        <svg
                          className="h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
        <div className="flex justify-between">
          <button
            onClick={() => {
              setBlogArrayIndex(currentBlogArrayIndex - 1);
            }}
            className={`button mr-auto inline-flex rounded-sm bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700 ${
              currentBlogArrayIndex === 0 ? "hidden" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setBlogArrayIndex(currentBlogArrayIndex + 1);
            }}
            className={`button ml-auto inline-flex rounded-sm bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-700 ${
              currentBlogArrayIndex === blogArrays.length - 1 ? "hidden" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </motion.section>
  );
}
