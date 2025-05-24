import React from 'react'
import { Link } from 'react-router';
import Blogs from './../../Blogs.json'

import blog1 from "./../../assets/blog-1.jpeg"
import blog2 from "./../../assets/blog-2.jpeg"
import blog3 from "./../../assets/blog-3.jpeg"
import blog4 from "./../../assets/blog-4.jpeg"
import blog5 from "./../../assets/blog-5.jpeg"

function Blog() {
  return (
    <>
      <div className="page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link>/Blog
        </p>
        <h2 className="fw-bold">Blog</h2>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-9 blog-wrapper">
            <div className="row">
              {Blogs.map((blog)=>(
                <div className="col-lg-6" key={blog.id}>
                  <div className="blog-card overflow-hidden mb-4">
                    <div className="blog-img overflow-hidden rounded">
                      <img src={blog.image} className="img-fluid rounded" alt={blog.title} />
                    </div>
                    <div className="blog-content mt-3">
                      <h6>
                        {blog.categories.map((cat,i)=>(
                          <span key={i}>
                            {cat}
                            {i<blog.categories.length-1?' | ':''}
                          </span>
                        ))}
                      </h6>
                      <h1 className="mt-2">{blog.title}</h1>
                      <h5>
                        {blog.date} <span className='dot'>•</span><span>by {blog.author}</span>
                      </h5>
                      <p>{blog.pera}</p>
                      <a className="blog-btn">
                        Read More <i className="ri-arrow-right-long-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 blog-sidebar">
            {/* recent post */}
            <div className="blog-side-box border rounded p-2 post-hide">
              <h2 className="border-bottom pb-2">Recent Posts</h2>

              {/* blog box one */}
              <div className="blog-post-box d-flex gap-2">
                <div className="blog-post-img">
                  <img src={blog1} className='img-fluid' alt="" />
                </div>
                <div className="blog-post-text">
                  <p>how to write a blog post your readers will love in 5 steps</p>
                </div>
              </div>
              {/* blog box 2 */}
              <div className="blog-post-box d-flex gap-2">
                <div className="blog-post-img">
                  <img src={blog2} className='img-fluid' alt="" />
                </div>
                <div className="blog-post-text">
                  <p>how to write a blog post your readers will love in 5 steps</p>
                </div>
              </div>
              {/* blog box 3 */}
              <div className="blog-post-box d-flex gap-2">
                <div className="blog-post-img">
                  <img src={blog3} className='img-fluid' alt="" />
                </div>
                <div className="blog-post-text">
                  <p>how to write a blog post your readers will love in 5 steps</p>
                </div>
              </div>
              {/* blog box 4 */}
              <div className="blog-post-box d-flex gap-2">
                <div className="blog-post-img">
                  <img src={blog4} className='img-fluid' alt="" />
                </div>
                <div className="blog-post-text">
                  <p>how to write a blog post your readers will love in 5 steps</p>
                </div>
              </div>
              {/* blog box 5 */}
              <div className="blog-post-box d-flex gap-2">
                <div className="blog-post-img">
                  <img src={blog5} className='img-fluid' alt="" />
                </div>
                <div className="blog-post-text">
                  <p>how to write a blog post your readers will love in 5 steps</p>
                </div>
              </div>
            </div>

            {/* recent comments */}
          <div className="blog-side-box border rounded p-2 mt-4 post-hide">
            <h2 className="border-bottom pb-2">Recent Comments</h2>
            <div className="blog-post-text mt-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="blog-post-text mt-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="blog-post-text mt-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="blog-post-text mt-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="blog-post-text mt-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          {/* category */}

          <div className="blog-side-box border rounded p-2 mt-4">
            <h2 className="border-bottom pb-2">Category</h2>
            <div className="blog-post-link mt-3">
              <a>Business</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Information</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Marketing</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Promotion</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Search Engine</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Social Media</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Statistics</a>
            </div>
            <div className="blog-post-link mt-3">
              <a>Writing</a>
            </div>
          </div>

          {/* tags */}

          <div className="blog-side-box border rounded p-2 mt-4">
            <h2 className="border-bottom pb-2">Tags</h2>
            <div className="blog-post-text mt-2">
              <span>Blogging (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Community (6)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Copywriting (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Educational (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Experiences (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Knowledge (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Learning (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Management (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Networking (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Photography (4)</span>
            </div>
            <div className="blog-post-text mt-2">
              <span>Success Story (4)</span>
            </div>
          </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Blog