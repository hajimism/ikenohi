import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Tag from './Tag'

const styles = require('../css/article-preview.module.css')

const ArticlePreview = ({ article }: any) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
        {article.title}
      </Link>
    </h3>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags &&
      article.tags.map((tag: any) => (
        <Tag label={tag} key={tag}>
          {tag}
        </Tag>
      ))}
  </div>
)
export default ArticlePreview