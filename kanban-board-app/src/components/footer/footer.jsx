import React from 'react';

import './footer.css';

const Footer = ({ tasks, username }) => {
    const activeTasksCount = tasks.backlog.length;
    const finishedTasksCount = tasks.finished.length;

    return (
        <footer>
            <div className='footer__left'>
                Active tasks: {activeTasksCount} |
                Finished tasks: {finishedTasksCount}
            </div>
            <div className='footer__right'>
                Kanban board by {username}
            </div>
        </footer>
    );
};

export default Footer;
