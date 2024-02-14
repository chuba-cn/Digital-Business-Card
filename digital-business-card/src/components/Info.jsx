/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <div className="info--about">
                <h3 className="info--about-title">About</h3>
                <p className="info--about-paragraph">
                    I am a frontend developer who loves making simple and elegant UI's. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div className="info--interests">
                <h3 className="info--interests-title">Interests</h3>
                <p className="info--interests-paragraph">
                    Internet fanatic. Avid Reader. Music Lover. Formula 1 geek. Vehicle Buff.
                    Football lover. Manchester United Fan. Cofee Ninja. Pop culture sweetheart
                </p>
            </div>
        </div>
    )
}