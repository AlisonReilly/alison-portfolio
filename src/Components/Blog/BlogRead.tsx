import React from 'react';
import '../../Styles/Blog.css';
import '../../Styles/BlogReadView.css';


interface BlogReadProps {
    altText?: string;
    image?: any;
    content?: any;
    blogURL?: string;
    title: string;
    originalDate?: string;
    tags?: string[];
}

export const BlogRead: React.FC<BlogReadProps & React.HTMLProps<HTMLDivElement>> = (
    { blogURL, content, title, originalDate }) => { 

        const addP = (className: string, text: string) => {
            return (
                <p className={className}>{text}</p>
            )
        }

        const addBasicElement = (element: string, text: string, className: string, key: string, href: string, altText: string, imageSrc: string, imageCaption: string): React.ReactNode => {
            if (element === 'span') return <span key={key} className={className}>{text}</span>
            if (element === 'div') return <div key={key} className={className}>{text}</div>
            if (element === 'a') return <a key={key} className={className} href={href} rel='noreferrer' target='_blank'>{text}</a>
            if (element === 'img') {
                return (
                    <figure className='figure-image'>
                        <img alt={altText} className={className} src={imageSrc}/> 
                        {imageCaption && <figcaption className='caption'>{imageCaption}</figcaption>}
                    </figure>
                )
        }
            return text
        }
    
        const addRichText = (richText: any, className: string, text: string) => {
            return (
                <p className={className}>
                    {text} {richText.map((e, i) => {
                        return ( e.element === 'span' ? <span className={e.className}>{e.text}</span>
                            : e.element === 'a' 
                                ? <a key={i} className={e.className} href={e.href} rel='noreferrer' target='_blank'>{e.text}</a>
                                : e.text
                        )
                        })}
                </p>
            )
        }
    
        const addSubElementsOl = (subElements: any, className: string, text: string, parentElement?: string) => {
            return (
                <ol className={className || 'numbered-blog'}>
                    {subElements.map((e, i) => 
                        <li key={`${i}-ol`}>
                            {e.text}
                            {e.codeContent && e.codeContent.length > 0 && addCodeBlockContent(e.codeContent, e.className)}
                            {e.ul && e.ul.length > 0 && addSubElementsUl(e.ul, e.className, e.text)}
                            {e.ol && e.ol.length > 0 && addSubElementsOl(e.ol, e.className, e.text)}
                        </li>
                    )}
                </ol>
            )
        }
    
        const addSubElementsUl = (subElements: any, className: string, text: string) => {
            return (
                <ul className='ul-squares'>
                    {subElements.map((e, i) => 
                        <li key={`${i}-ul`} className='li-squares'>                            
                            {e.text}
                            {e.codeContent && e.codeContent.length > 0 && addCodeBlockContent(e.codeContent, e.className)}
                            {e.ul && e.ul.length > 0 && addSubElementsUl(e.ul, e.className, e.text)}
                            {e.ol && e.ol.length > 0 && addSubElementsOl(e.ol, e.className, e.text)}
                            {e.subElements && e.subElements.length > 0 && e.subElements.map((e, i) => e.codeContent && e.codeContent.length > 0 
                             ? addCodeBlockContent(e.codeContent, e.className) : e.richText && e.richText.length > 0 ? addRichText(e.richText, e.className, e.text) 
                             : addBasicElement(e.element, e.text, e.className, i, e.href, e.altText, e.imageSrc, e.imageCaption))}
                        </li>
                    )}
                </ul>
            )
        }
    
        const addCodeBlockContent = (codeContent: any, className: string) => {
                return (
                    <div className='code-block-large'>{codeContent.map((e,i) => 
                        e + '\n'
                    )}</div>
                )
        }
        
        // todo combine some of this and find patterns to store the data where it has the same approach and could be done recursively
        const renderBlog = (elementData: any, key?: React.Key): React.ReactNode => {
            const { element, text, className, codeContent, richText, ul, ol, subElements, href } = elementData;
          
            const children = [];
            if (!richText && element === 'p') {
                children.push(<p className={className}>{text}</p>)
            }

            if (element === 'div') {
                console.log('element is div: ', elementData)
                children.push(
                <div className={className}>
                    {text}
                    {subElements && subElements.length > 0 && subElements.map((e, i) => addBasicElement(e.element, e.text, e.className, i, e.href, e.altText, e.imageSrc, e.imageCaption))}
                </div>)
            }

            if (element === 'a') {
                children.push(<a href={href} className={className} rel='noreferrer' target='_blank'>{text}</a>)
            }

            if (element === 'h3') {
                children.push(<h3 className={className}>{text}</h3>)
            }
          
            if (richText && Array.isArray(richText)) {
              children.push(addRichText(richText, className, text))
            }
          
            if (ol && Array.isArray(ol)) {
              children.push(addSubElementsOl(ol, className, text))
            }

            if (ul && Array.isArray(ul)) {
              children.push(addSubElementsUl(ul, className, text))
            }

            if (codeContent && codeContent.length > 0) {
              children.push(addCodeBlockContent(codeContent, className))
            }  
            return children;
          };
          content.map((e, i) => {
            renderBlog(e, i)
          })

    return (
        <div id={blogURL} className='blog-read-container'> 
            <div className='blog-read-title'>{title}</div>
            <div className='blog-read-date'>{originalDate}</div>
            {content.length > 0 && content.map((e, i) => <div className='blog-content-read-wrapper'>{renderBlog(e, i)}</div>)}
        </div>
    ); 
} 