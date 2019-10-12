import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogsPage = ({ data }) => (
    <Layout>
      <SEO title="Blogs" />
      {data.allMarkdownRemark.edges.map(blog => (
      <section id="one">
			<div className="inner">
				<header>
					<h2>{blog.node.title}</h2>
				</header>
				<div>
                    <p
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{
                            __html: blog.node.frontmatter.shortdescription,
                        }}
                    />
                </div>
				<ul className="actions">
					<li><Link to={'blog/'+blog.node.frontmatter.path} className="button alt">Learn More</Link></li>
				</ul>
			</div>
		</section>
      ))}
    </Layout>
)

export default BlogsPage

export const query = graphql`
    query BlogPage {
        allMarkdownRemark {
            edges {
                node {
                id
                frontmatter {
                    title
                    shortdescription
                    path
                }
                html
                }
            }
        }
    }
`