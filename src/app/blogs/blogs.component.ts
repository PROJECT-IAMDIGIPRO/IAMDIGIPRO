import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  isBlogCardOpen: boolean = false;
  selectedPost: any;
  posts = [
    {
      title: "How to Maximize Your Digital Marketing Efforts",
      image: "../assets/images/blogs/image_blogPage1.jpg",
      // image: "images/blogs/image_blogPage1.jpg",
      content: "To maximize your digital marketing efforts, focus on integrating end-to-end digital marketing strategies, impactful web development...",
      category: "Marketing",
      date: "24 June 2024"
    },
    {
      title: "Create a User-Centric Website with iamdigipro",
      image: "../assets/images/blogs/image_blogPage2.jpg",
      content: "At iamdigipro, we specialize in designing user-centric websites that captivate and engage. Our expert team focuses on intuitive navigation...",
      category: "Design",
      date: "24 June 2024"
    },
    {
      title: "Top Web Development Trends in 2024",
      image: "../assets/images/blogs/image_blogPage3.jpg",
      content: "Stay ahead in 2024 with the latest web development trends. Embrace AI-driven solutions, progressive web apps (PWAs), and enhanced cybersecurity...",
      category: "Development",
      date: "24 June 2024"
    },
    {
      title: "Enhancing User Experience with Intuitive UI",
      image: "../assets/images/blogs/image_blogPage4.jpg",
      content: "Boost user satisfaction with iamdigipro’s intuitive UI designs. Our approach focuses on simplicity, accessibility, and seamless...",
      category: "Design",
      date: "24 June 2024"
    },
    {
      title: "How to Dominate Search Engines with Effective SEO Techniques",
      image: "../assets/images/blogs/image_blogPage5.jpg",
      content: "Elevate your online visibility with iamdigipro’s expert SEO techniques. Optimize your content with relevant...",
      category: "Marketing",
      date: "24 June 2024"
    },
    {
      title: "How to Measure and Improve Your Digital Marketing ROI",
      image: "../assets/images/blogs/image_blogPage6.jpg",
      content: "Maximize your returns with iamdigipro’s strategic approach to digital marketing. Track key performance indicators...",
      category: "Marketing",
      date: "24 June 2024"
    }
  ];

  blogcardOpen(index: number) {
    this.selectedPost = this.posts[index];
    this.isBlogCardOpen = true;
  }

  blogcardClose() {
    this.isBlogCardOpen = false;
  }

}
