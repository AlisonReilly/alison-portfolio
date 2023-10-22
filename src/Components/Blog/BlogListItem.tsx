import React from 'react';
import '../../Styles/Blog.css';
import { Link } from 'react-router-dom';

type BlogListItemProps = {
    altText?: string;
    image?: any;
    content?: string;
    title?: string;
    date?: Date | string;
    tags?: string[];

}

export const BlogListItem: React.FC<BlogListItemProps & React.HTMLProps<HTMLDivElement>> = ({
    image, content, title, date, tags, altText }) => { 
    return (
        <div id='BlogListItem' className='glassBlog'>
            <h3 className='blog-title'>Some Title</h3>
            <div className='blog-content'>
            The aftertaste, or "finish," is the primary factor in judging the quality and character of wine. Though you'll commonly hear grapes referred to as "fruit," botanists technically classify grapes as berries since each fruit forms from a single flower. Chenin blanc is a white wine grape grown in the Loire Valley of France. All grape juice is white, only the skins of purple grapes contain the dark pigment. A mommy needs more wine than adolescents. Chardonnay's buttery, toasty or clove-like finish. Trichloroanisole, or stinky cork, is produced when chlorine used in sanitization comes into contact with natural cork-dwelling bacteria.

High-end corks are handmade. A wine has legs if it sticks to the inside of the glass when swirled. In response to violent demonstrations by protesters, the French government began regulating the amount of sugar that can be added to wine in the early twentieth century. Strong notes of cedar, gin, with a cinnamon finish. Quip intelligently over oak-aged Chablis.

A grape in the glass is worth two on the vine. Spice, strawberries, oak and tar. Can't taste them? Drink more.

In cooler climates, cabernet sauvignon tends to produce wines with blackcurrant notes that can be accompanied by green bell pepper notes, mint and cedar which will all become more pronounced as the wine ages. Delicacy is prized in pinot noir and riesling. The world's oldest bottle of wine is over 1600 years old and can be found at a museum in Germany. Acidity is a key element in a wine's longevity.

Ideal for sipping, Gewürztraminer is one of the sweeter whites. A popular but unconfirmed theory claims that Malbec is named after a Hungarian peasant who first spread the grape variety throughout France. The proper way to hold a wineglass is to position it so that the wine goes into your mouth. Amaron is made primarily from Corvina grapes dried on racks before pressing.

Acid, tannin, fruitiness, oakiness, are all components of balance. The actual color of the wine can range from violet, typical of young wines, through red for mature wines, to brown for older red wines. Alsace, in Eastern France, is highly regarded as a winemaking region. Rotten sémillon grapes are the secret to Sauternes. Wines that are named for a region are always capitalized – Bordeaux, Burgundy, Champagne, Rioja, Chianti, Lambrusco, etc. The classic profile of Cabernet Sauvignon tends to be full-bodied with high tannins and noticeable acidity that contributes to the wine's aging potential.

An inimitable flavor is found in barrels. Beaujolais, from the region that is its namesake, is made from Gamay grapes.

            </div>
            <Link to='#'>...Read More</Link>

        </div>
    ); 
} 