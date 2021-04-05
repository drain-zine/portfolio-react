var y_spacing = 60;
var y_spacing_half = 32;


export const data_raw = [
    {
        key: 1,
        type: 1,
        spacing_top: 96,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: -1,
        card_width: 100,

        img: require("./../../assets/dynamic/DrainE2Intro.gif").default,
        img_size: 80,
        text_1: 'Presented is some teaser content from Drain Edition 2. The zine’s visual style has been massively expanded to feature more graphic elements, JavaScript animations, games, sound and more.',   
        text_2: '',

        link: false,
        link_url: ""
    },

    {
        key: 2,
        type: 6,
        spacing_top: y_spacing,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: -2,
        card_width: 110,

        text_1: 'An example content page from one “location” in the zine, The Ye Olde Fountain, containing a piece of flavour text and presenting a riddle solving game.',
        img: require("./../../assets/static/DrainE2FountainWorks.png").default,
        img_size: 70,
        text_2: '',
    
        link: false,
        link_url: ""
    },

    {
        key: 3,
        type: 6,
        spacing_top: y_spacing,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: -2,
        card_width: 60,

        text_1: 'A dice rolling game from the same location where once the button is pressed the dice roll, prompting the orc to say something and the score to be drawn onto the parchment to the right.',
        img: require("./../../assets/dynamic/DrainE2Orc.gif").default,
        img_size: 80,
        text_2: '',
        
    
        link: false,
        link_url: ""
    },

    {
        key: 4,
        type: 1,
        spacing_top: 96,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: -1,
        card_width: 100,

        img: require("./../../assets/static/DrainE2LinkedLounge.png").default,
        img_size: 80,
        text_1: 'Here we see another location within the zine, “The LinkedLounge”, this one a clear pastiche of bland corporate webportals. This features a scrolling slideshow of stock images on the banner, a share to LinkedIn function and more.',   
        text_2: '',

        link: false,
        link_url: ""
    },

    
    {
        key: 5,
        type: 3,
        spacing_top: 96,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: 0,
        card_width: 75,

        img: require("./../../assets/static/DrainE2LinkedLoungeTeam.png").default,
        img_size: 60,
        text_1: '',   
        text_2: 'Here is an example of an interactive page on the LinkedLounge, this one providing information about the board members of the fictional corporation when their portraits are selected or hovered over with the cursor',

        link: false,
        link_url: ""
    },

    {
        key: 1,
        type: 1,
        spacing_top: 16,
        spacing_bottom: 32,
        rand_x: false,
        x_pos: 5,
        card_width: 50,

        img: require("./../../assets/dynamic/DrainE2Hover.gif").default,
        img_size: 100,
        text_1: '',   
        text_2: '',

        link: false,
        link_url: ""
    },
];