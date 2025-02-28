import React from 'react'

export default function Quotes() {
  return (
    <>
        <div className="text-bg-info p-3 my-3" >
            <div>
                <figure className="text-center">
                <blockquote className="blockquote">
                    <p>“The only secure computer is one that’s unplugged, locked in a safe, and buried 20 feet under the ground in a secret location... and I’m not even too sure about that one.”</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">Dennis Hughes, FBI</cite>
                </figcaption>
                </figure>
            </div>
        </div>

        <div className="text-bg-info p-3 my-3" >
            <div>
                <figure className="text-center">
                <blockquote className="blockquote">
                    <p>“An ounce of prevention is worth a pound of cure.”</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title">Benjamin Franklin</cite>
                </figcaption>
                </figure>
            </div>
        </div>

    </>
  )
}
