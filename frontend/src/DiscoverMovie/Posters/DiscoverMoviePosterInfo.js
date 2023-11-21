import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'Components/Icon';
import TmdbRating from 'Components/TmdbRating';
import { icons } from 'Helpers/Props';
import { getMovieStatusDetails } from 'Movie/MovieStatus';
import formatRuntime from 'Utilities/Date/formatRuntime';
import getRelativeDate from 'Utilities/Date/getRelativeDate';
import translate from 'Utilities/String/translate';
import styles from './DiscoverMoviePosterInfo.css';

function DiscoverMoviePosterInfo(props) {
  const {
    status,
    studio,
    inCinemas,
    digitalRelease,
    physicalRelease,
    certification,
    runtime,
    ratings,
    sortKey,
    showRelativeDates,
    shortDateFormat,
    timeFormat,
    movieRuntimeFormat
  } = props;

  if (sortKey === 'status' && status) {
    return (
      <div className={styles.info} title={translate('Status')}>
        {getMovieStatusDetails(status).title}
      </div>
    );
  }

  if (sortKey === 'studio' && studio) {
    return (
      <div className={styles.info} title={translate('Studio')}>
        {studio}
      </div>
    );
  }

  if (sortKey === 'inCinemas' && inCinemas) {
    const inCinemasDate = getRelativeDate(
      inCinemas,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info} title={translate('InCinemas')}>
        <Icon name={icons.IN_CINEMAS} /> {inCinemasDate}
      </div>
    );
  }

  if (sortKey === 'digitalRelease' && digitalRelease) {
    const digitalReleaseDate = getRelativeDate(
      digitalRelease,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info} title={translate('DigitalRelease')}>
        <Icon name={icons.MOVIE_FILE} /> {digitalReleaseDate}
      </div>
    );
  }

  if (sortKey === 'physicalRelease' && physicalRelease) {
    const physicalReleaseDate = getRelativeDate(
      physicalRelease,
      shortDateFormat,
      showRelativeDates,
      {
        timeFormat,
        timeForToday: false
      }
    );

    return (
      <div className={styles.info} title={translate('PhysicalRelease')}>
        <Icon name={icons.DISC} /> {physicalReleaseDate}
      </div>
    );
  }

  if (sortKey === 'certification' && certification) {
    return (
      <div className={styles.info} title={translate('Certification')}>
        {certification}
      </div>
    );
  }

  if (sortKey === 'runtime' && runtime) {
    return (
      <div className={styles.info} title={translate('Runtime')}>
        {formatRuntime(runtime, movieRuntimeFormat)}
      </div>
    );
  }

  if (sortKey === 'ratings' && ratings) {
    return (
      <div className={styles.info}>
        <TmdbRating ratings={ratings} />
      </div>
    );
  }

  return null;
}

DiscoverMoviePosterInfo.propTypes = {
  status: PropTypes.string,
  studio: PropTypes.string,
  inCinemas: PropTypes.string,
  certification: PropTypes.string,
  digitalRelease: PropTypes.string,
  physicalRelease: PropTypes.string,
  runtime: PropTypes.number,
  ratings: PropTypes.object.isRequired,
  sortKey: PropTypes.string.isRequired,
  showRelativeDates: PropTypes.bool.isRequired,
  shortDateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  movieRuntimeFormat: PropTypes.string.isRequired
};

export default DiscoverMoviePosterInfo;
