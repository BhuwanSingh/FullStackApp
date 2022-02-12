import StoryItem from './StoryItem';
import './storyList.css';

const StoryList = (props) => {
    return (
        <ul className="story-list">
            {props.stories.map(story => (
                <StoryItem
                    key={story.id}
                    id={story.id}
                    title={story.title}
                    story={story.story}
                    likes={story.likes} />
            ))}
        </ul>
    );
}

export default StoryList;