import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faTelegram,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

export default function Contact() {
  return (
    <div>
    <a
      className="light-grey"
      href="https://www.linkedin.com/in/hasan-kakeh-a07b571b9"
      target="_blank"
    >
      <FontAwesomeIcon size="2x" icon={faLinkedin} />
    </a>
    <a
      className="ms-3 light-grey"
      href="https://github.com/hasanKakeh"
      target="_blank"
    >
      <FontAwesomeIcon size="2x" icon={faGithub} />
    </a>
    <a
      className="ms-3 light-grey"
      href="https://t.me/hasankakeh"
      target="_blank"
    >
      <FontAwesomeIcon size="2x" icon={faTelegram} />
    </a>
    <a
      className="ms-3 light-grey"
      href="mailto:hasan.kakeh1@gmail.com"
      target="_blank"
    >
      <FontAwesomeIcon size="2x" icon={faEnvelope} />
    </a>
  </div>
  )
}
