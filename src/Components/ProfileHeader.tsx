import { BasicDiagram } from './Diagramming/BasicDiagram';
import { TextType } from './TextEffects/TextType';
import { Link } from 'react-router-dom';
  
export const ProfileHeader = () => { 
    return ( 
        <header id='ProfileHeader' > 
            <div className='flexrow'>
                <span id='logo-diagram' className='diagram-outline-smaller flexcolumn'>
                <Link className='modern-link' to='/'>A</Link>
                    <BasicDiagram className='diagram-text' figureNumber='1'/>
                </span>
                <div id='logo-text-after' className='flexrow'>
                    <TextType removeCursor={true} typeEffect='type-backspace' text='lison Reilly'/>
                </div>
            </div>
        </header> 
    ); 
} 
