const y_spacing = 80;
const largeFont= "text-4xl";

export const data_raw = [
    {
        key: 1,
        type: 1,
        spacing_top: 96,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: 0,

        img: require("./../assets/dynamic/skeleton.gif").default,
        text_1: 'Avant Vibes, powered by Monster Energy® is a weekly delve into the forefront of vibe culture, ranging from the most fuego fits to the most diesel tracks out right now. Follow your hosts as they center their chakras, live, laugh, and love in the center of it all. Peace forever, R.I.P Jerry. - Scraped from “About Page”',   
        text_2: '',
        text_offset_top: 'mt-24',
        text_offset_left: '-ml-80',
        text_offset_right: 'mr-40',

        link: true,
        link_url: "/moodboards/avant_vibes",
        font_size: largeFont
    },

    {
        key: 2,
        type: 3,
        spacing_top: 80,
        spacing_bottom: 0,
        rand_x: false,
        x_pos: -15,
        
        text_1: 'Drain Zine Edition 1. An independent student zine focusing on the fringes of art, fashion and music culture. What will you find from down the drain?',
        img: require("./../assets/static/bird.png").default,
        text_2: '\"Welcome adventurer to this perilous realm. Danger lurks around every corner... however, if you can brave DRAIN\'s treacheries it is said great knowledge will be bestowed upon thee...\"',   
        img_size: 40,
        text_offset_top: 'mt-24',
        text_offset_left: '-ml-80',
        text_offset_right: 'mr-8',

        link: true,
        link_url: "/moodboards/drain_e1",
        font_size: largeFont
    },

    {
        key: 3,
        type: 2,
        spacing_top: 80,
        spacing_bottom: 32,
        rand_x: false,
        x_pos: 3,

        img: require("./../assets/static/tavern1.png").default,
        text_1: 'DRAIN Edition 2. An independent choose-your-own-adventure zine, with several uniquely styled "locations" corresponding to the zine\'s themes.',
        text_2: '', 
        img_size: 45,
        text_offset_top: 'mt-24',
        text_offset_left: '-ml-80',
        text_offset_right: 'mr-8',
        
        link: true,
        link_url: "/moodboards/drain_e2",
        font_size: largeFont
    },
];