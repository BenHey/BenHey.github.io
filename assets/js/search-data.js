// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-present-at-the-colloquium-on-when-causal-inference-meets-statistical-analysis-our-work-on-causal-inference-with-information-fields-with-michel-de-lara-and-jean-philippe-chancelier-a-full-version-of-the-investigation-is-on-arxiv-splitted-in-three-subpapers-you-can-find-the-slides-of-my-presentation-here",
          title: 'I will present at The Colloquium on When Causal Inference meets Statistical Analysis...',
          description: "",
          section: "News",},{id: "news-we-will-present-at-fundamental-challenges-in-causality-our-work-on-causal-inference-with-information-fields",
          title: 'We will present at Fundamental Challenges in Causality our work on Causal Inference...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-data-sharing-du-shapley-a-shapley-value-proxy-for-efficient-dataset-valuation",
          title: 'New preprint on data sharing DU-Shapley: A Shapley Value Proxy for Efficient Dataset...',
          description: "",
          section: "News",},{id: "news-i-will-be-a-speaker-at-causality-in-practice-our-presentation-decks-are-here-and-here",
          title: 'I will be a speaker at Causality in Practice. Our presentation decks are...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-bidding-in-repeated-auctions-repeated-bidding-with-dynamic-value-joint-work-with-alexandre-gilotte-and-rémi-chan-renous",
          title: 'New preprint on bidding in repeated auctions Repeated Bidding with Dynamic Value. Joint...',
          description: "",
          section: "News",},{id: "news-updated-preprint-on-learning-in-display-advertising-auctions-fixed-point-label-attribution-for-real-time-bidding-joint-work-with-antoine-désir-insead-and-martin-bompaire-criteo-ai-lab",
          title: 'Updated preprint on learning in display advertising auctions Fixed point label attribution for...',
          description: "",
          section: "News",},{id: "news-i-will-present-at-journée-des-rencontres-ensae-ensai-our-work-on-repeated-bidding-presentation-here-preprint-here",
          title: 'I will present at Journée des rencontres ENSAE-ENSAI our work on repeated bidding,...',
          description: "",
          section: "News",},{id: "news-an-old-work-now-on-arxiv-some-bidding-games-converging-to-their-unique-pure-equilibrium",
          title: 'An old work now on arxiv : Some bidding games converging to their...',
          description: "",
          section: "News",},{id: "news-new-blog-post-with-flavian-vasile-on-medium-recommender-systems-need-a-user-model",
          title: 'New blog post with Flavian Vasile on Medium : Recommender systems need a...',
          description: "",
          section: "News",},{id: "news-talk-at-causality-discussion-group-online-causality-with-information-algebras-presentation-here-thank-matej-for-the-invitation",
          title: 'Talk at Causality Discussion Group (online): Causality with Information Algebras. Presentation here. Thank...',
          description: "",
          section: "News",},{id: "news-my-colleagues-jean-philippe-chancelier-and-michel-de-lara-presented-our-work-at-the-workshop-on-restless-bandits-index-policies-and-applications-in-reinforcement-learning-slides-available-on-the-workshop-page",
          title: 'My colleagues Jean-Philippe Chancelier and Michel De Lara presented our work at the...',
          description: "",
          section: "News",},{id: "news-our-paper-maximizing-the-success-probability-of-policy-allocations-in-online-systems-was-accepted-to-aaai-24-with-artem-betlei-thibaud-rahier-mariia-vladimirova-mehdi-sebbar-and-nicolas-urien",
          title: 'Our paper Maximizing the Success Probability of Policy Allocations in Online Systems was...',
          description: "",
          section: "News",},{id: "news-our-paper-reverse-auctions-with-transportation-and-convex-costs-was-accepted-for-publication-in-computational-management-science-with-alejandro-jofré",
          title: 'Our paper Reverse auctions with transportation and convex costs was accepted for publication...',
          description: "",
          section: "News",},{id: "news-fixed-point-label-attribution-for-real-time-bidding-with-antoine-désir-and-martin-bompaire-has-been-accepted-for-publication-at-msom",
          title: 'Fixed point label attribution for real-time bidding, with Antoine Désir and Martin Bompaire...',
          description: "",
          section: "News",},{id: "news-i-am-glad-to-share-our-recently-published-article-with-alejandro-jofré-on-reverse-auctions-with-transportation-the-link-is-here",
          title: 'I am glad to share our recently published article with Alejandro Jofré on...',
          description: "",
          section: "News",},{id: "news-today-i-am-presenting-our-poster-about-maximizing-the-success-probability-of-policy-allocations-in-online-systems-at-aaai",
          title: 'Today, I am presenting our poster about Maximizing the Success Probability of Policy...',
          description: "",
          section: "News",},{id: "news-poster-for-maximizing-the-success-probability-of-policy-allocations-in-online-systems-presented-at-aaai-here",
          title: 'Poster for Maximizing the Success Probability of Policy Allocations in Online Systems presented...',
          description: "",
          section: "News",},{id: "news-our-paper-fixed-point-label-attribution-for-real-time-bidding-with-antoine-désir-and-martin-bompaire-is-published",
          title: 'Our paper Fixed Point Label Attribution for Real-Time Bidding, with Antoine Désir and...',
          description: "",
          section: "News",},{id: "news-our-preprint-conditional-separation-as-a-binary-relation-a-coq-assisted-proof-with-jean-philippe-chancelier-and-michel-de-lara-is-available-on-hal",
          title: 'Our preprint Conditional Separation as a Binary Relation. A Coq Assisted Proof, with...',
          description: "",
          section: "News",},{id: "news-our-article-procurement-auctions-with-losses-with-alejandro-jofré-has-been-accepted-for-publication-at-computational-management-science",
          title: 'Our article Procurement Auctions with Losses with Alejandro Jofré has been accepted for...',
          description: "",
          section: "News",},{id: "news-updated-preprint-on-lagrangian-relaxation-and-dynamic-programming-optimality-gap-analysis-of-the-decomposition-coordination-method-for-finite-horizon-bandit-problem",
          title: 'Updated preprint on Lagrangian relaxation and dynamic programming: Optimality Gap Analysis of the...',
          description: "",
          section: "News",},{id: "news-our-article-procurement-auctions-with-losses-with-alejandro-jofré-has-been-published-here-is-a-temporary-link-here",
          title: 'Our article Procurement Auctions with Losses with Alejandro Jofré has been published, here...',
          description: "",
          section: "News",},{id: "news-new-preprint-a-pragmatic-policy-learning-approach-to-account-for-users-fatigue-in-repeated-auctions-with-alexandre-gilotte-and-rémi-chan-renous",
          title: 'New preprint: A pragmatic policy learning approach to account for users’ fatigue in...',
          description: "",
          section: "News",},{id: "news-our-preprint-learning-in-games-with-progressive-hiding-is-on-arxiv-with-marc-lanctot",
          title: 'Our preprint Learning in Games with progressive hiding is on arxiv (with Marc...',
          description: "",
          section: "News",},{id: "news-our-paper-welfare-optimized-recommender-systems-is-accepted-for-the-workshop-on-strategic-and-utility-aware-recommendation-sure-at-the-18th-acm-conference-on-recommender-systems-recsys24",
          title: 'Our paper Welfare-Optimized Recommender Systems is accepted for the workshop on Strategic and...',
          description: "",
          section: "News",},{id: "news-our-paper-repeated-bidding-with-dynamic-value-is-accepted-to-wine-2024-with-alexandre-gilotte-and-rémi-chan-renous",
          title: 'Our paper Repeated Bidding with Dynamic Value is accepted to WINE 2024 (with...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-in-games-with-progressive-hiding-with-marc-lanctot-has-been-selected-for-an-oral-presentation-at-montreal-ai-symposium",
          title: 'Our paper Learning in Games with progressive hiding (with Marc Lanctot) has been...',
          description: "",
          section: "News",},{id: "news-our-paper-du-shapley-a-shapley-value-proxy-for-efficient-dataset-valuation-with-felipe-garrido-lucero-maxime-vono-patrick-loiseau-vianney-perchet-has-been-accepted-at-neurips-2024",
          title: 'Our paper DU-Shapley: A Shapley Value Proxy for Efficient Dataset Valuation (with Felipe...',
          description: "",
          section: "News",},{id: "news-our-paper-learning-in-games-with-progressive-hiding-with-marc-lanctot-has-been-accepted-for-aamas-2025",
          title: 'Our paper Learning in Games with progressive hiding (with Marc Lanctot) has been...',
          description: "",
          section: "News",},{id: "news-on-the-impact-of-the-utility-in-semivalue-based-data-valuation-with-mélissa-tamine-patrick-loiseau-and-maxime-vono-is-on-arxiv",
          title: 'On the Impact of the Utility in Semivalue-based Data Valuation with Mélissa Tamine,...',
          description: "",
          section: "News",},{id: "news-adaptive-preference-aggregation-has-been-accepted-to-gaiw-at-aamas-2025-thank-you-marc-lanctot-for-your-insights",
          title: 'Adaptive Preference Aggregation has been accepted to GAIW at AAMAS 2025 !!! (thank...',
          description: "",
          section: "News",},{id: "news-i-presented-learning-in-games-with-progressive-hiding-with-marc-lanctot-and-optimality-gap-analysis-of-the-decomposition-coordination-method-for-finite-horizon-bandit-problem-with-michel-de-lara-and-jean-philippe-chancelier-at-icsp",
          title: 'I presented Learning in Games with progressive hiding (with Marc Lanctot), and Optimality...',
          description: "",
          section: "News",},{id: "news-my-team-got-5-papers-accepted-at-consequences-25",
          title: 'My team got 5 papers accepted at   Consequences’25 !!!',
          description: "",
          section: "News",},{id: "news-new-preprint-counterfactual-simulations-for-large-scale-systems-with-burnout-variables",
          title: 'New preprint:  Counterfactual simulations for large scale systems with burnout variables',
          description: "",
          section: "News",},{id: "news-new-extended-abstract-non-linear-counterfactual-aggregate-optimization-with-otmane-sakhi",
          title: 'New  extended abstract:   Non-Linear Counterfactual Aggregate Optimization  with   Otmane Sakhi .',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
