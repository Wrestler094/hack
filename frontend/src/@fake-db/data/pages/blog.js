import mock from "@/@fake-db/mock";
/* eslint-disable global-require */
const data = {
  // blog list
  blogList: [
    {
      id: 1,
      img: require("@/assets/images/slider/02.jpg"),
      title: "Фронтенд-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-7.jpg"),
      userFullName: "Андрей Власов",
      blogPosted: "10-12-2022",
      tags: ["Frontend"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 76,
    },
    {
      id: 2,
      img: require("@/assets/images/slider/06.jpg"),
      title: "iOS-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
      userFullName: "Иван Иванов",
      blogPosted: "16-11-2022",
      tags: ["Mobile", "iOS"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 2100,
    },
    {
      id: 3,
      img: require("@/assets/images/slider/04.jpg"),
      title: "Android-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-3.jpg"),
      userFullName: "Алиса Волк",
      blogPosted: "03-09-2022",
      tags: ["Mobile", "Android"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 243,
    },
    {
      id: 4,
      img: require("@/assets/images/slider/03.jpg"),
      title: "Go-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-14.jpg"),
      userFullName: "Иван Петров",
      blogPosted: "10-12-2022",
      tags: ["Golang"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 10,
    },
    {
      id: 5,
      img: require("@/assets/images/slider/09.jpg"),
      title: "Мидл фронтенд-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-13.jpg"),
      userFullName: "Андрей Власов",
      blogPosted: "10-12-2022",
      tags: ["Middle", "Frontend"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 319,
    },
    {
      id: 6,
      img: require("@/assets/images/slider/10.jpg"),
      title: "Алгоритмы и структуры данных",
      avatar: require("@/assets/images/portrait/small/avatar-s-13.jpg"),
      userFullName: "Андрей Власов",
      blogPosted: "10-12-2022",
      tags: ["Algorithm"],
      excerpt:
        "Цель курса — передать практический опыт разработки. Мы вложили в этот курс те знания и навыки, которые сами хотели бы видеть. И спроектировали программу так, чтобы учиться можно было быстрее и эффективнее.",
      comment: 1500,
    },
  ],

  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        id: 7,
        img: require("@/assets/images/banner/banner-22.jpg"),
        title: "Автоматизатор тестирования на Java",
        createdTime: "10-12-2022",
      },
      {
        id: 8,
        img: require("@/assets/images/banner/banner-27.jpg"),
        title: "Разработчик C++",
        createdTime: "01-11-2022",
      },
      {
        id: 9,
        img: require("@/assets/images/banner/banner-39.jpg"),
        title: "Веб-разработчик",
        createdTime: "09-12-2022",
      },
      {
        id: 10,
        img: require("@/assets/images/banner/banner-35.jpg"),
        title: "Инженер по тестированию",
        createdTime: "10-12-2022",
      },
    ],
    categories: [
      { category: "Frontend", icon: "WatchIcon" },
      { category: "Java", icon: "ShoppingCartIcon" },
      { category: "Golang", icon: "CommandIcon" },
      { category: "Testing", icon: "HashIcon" },
      { category: "Android", icon: "VideoIcon" },
    ],
  },

  // detail
  blogDetail: {
    blog: {
      img: require("@/assets/images/banner/banner-12.jpg"),
      title: " Курс Frontend-разработчик",
      avatar: require("@/assets/images/portrait/small/avatar-s-7.jpg"),
      userFullName: "Анстасия Иванова",
      createdTime: "09-12-2022",
      tags: ["Frontend", "JavaScript", "React"],
      content:
        "<p>Целью реализации программы «Frontend-разработчик» является формирование компетенций, необходимых для выполнения нового вида профессиональной деятельности в сфере информационных технологий: проектирование, разработка и интеграция информационных ресурсов в локальной сети и информационно-телекоммуникационной сети «Интернет».</p>" +
        "<h4>Актуальность</h4>" +
        "<p>Актуальность программы обусловлена потребностью общества в технически грамотных специалистах и полностью отвечает социальному заказу по подготовке квалифицированных кадров в области программирования, а также высоким интересом современного общества к IT-сфере. Важнейшей характеристикой современного общества является активность в информационном пространстве, интернет-коммуникации. Изучение основных принципов программирования невозможно без регулярной практики написания программ на каком-либо языке. Для обучения выбраны языки HTML, JavaScript, а также фреймворк Vue.js. Данный выбор обусловлен тем, что синтаксис языков достаточно прост и интуитивно понятен. Это снижает порог вхождения и позволяет сосредоточиться на логических и алгоритмических аспектах программирования, а не на заучивании тонкостей синтаксиса.</p>",
      comments: 19100,
      bookmarked: 139,
      UserComment: [],
    },
    comments: [
      {
        avatar: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
        userFullName: "Фанзиль Набияров",
        commentedAt: "24 декабря, 2022",
        commentText:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci corporis dolores error esse est fugiat iure laborum laudantium molestias non quisquam reprehenderit, saepe! Error facere id nihil nostrum nulla.\n",
      },
    ],
  },

  // edit
  blogEdit: {
    avatar: require("@/assets/images/portrait/small/avatar-s-9.jpg"),
    userFullName: "Chad Alexander",
    createdTime: "May 24, 2020",
    blogTitle: "The Best Features Coming to iOS and Web design",
    blogCategories: ["Fashion", "Gaming"],
    slug: "the-best-features-coming-to-ios-and-web-design",
    status: "Published",
    excerpt:
      "<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>",
    featuredImage: require("@/assets/images/slider/03.jpg"),
  },
};
/* eslint-disable global-require */
mock.onGet("/blog/list/data").reply(() => [200, data.blogList]);
mock.onGet("/blog/list/data/sidebar").reply(() => [200, data.blogSidebar]);
mock.onGet("/blog/list/data/detail").reply(() => [200, data.blogDetail]);
mock.onGet("/blog/list/data/edit").reply(() => [200, data.blogEdit]);
