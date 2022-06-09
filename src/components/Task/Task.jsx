import './task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({ label, onDeleted, onToggleDone, onEditingItem, done, time, min, sec, stopTimer, startTimer }) {
  let classNames = '';
  if (done) {
    classNames += 'completed';
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" onChange={onToggleDone} type="checkbox" checked={done} />
        <label>
          <span className="title" onClick={onToggleDone} onKeyDown={onToggleDone} aria-hidden="true">
            {label}
          </span>
          <span className="description">
            <button className="icon icon-play" type="button" onClick={startTimer} />
            <button className="icon icon-pause" type="button" onClick={stopTimer} />
            <span className="time">
              {min}:{sec}
            </span>
          </span>
          <span className="description">created {formatDistanceToNow(time, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" type="button" onClick={onEditingItem} title="edit" />
        <button className="icon icon-destroy" type="button" onClick={onDeleted} title="delete" />
      </div>
    </li>
  );
}

Task.defaultProps = {
  label: '',
  done: false,
  time: new Date(),
};

Task.propsTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  time: PropTypes.number,
};

export default Task;
