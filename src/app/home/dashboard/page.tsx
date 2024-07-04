'use client'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'

export default function Page() {

    return (
        <>
            <Link href={'/home'}>Home Link</Link>
            <h1>Dashboard</h1>
            <section>
                <Suspense fallback={<p>Loading UI ...</p>}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus vehicula quam in volutpat. Cras pulvinar interdum purus sed mattis. Aenean eget magna pellentesque, iaculis justo ut, cursus leo. Integer finibus commodo ante, vel blandit velit pellentesque ac. Ut dictum eu magna bibendum suscipit. Maecenas a neque congue, ornare leo vel, maximus sapien. Cras id suscipit dolor. In at lectus ullamcorper, gravida quam et, efficitur felis. Suspendisse sit amet ullamcorper felis. Nunc ut massa malesuada, lobortis sapien ut, maximus turpis. Morbi finibus erat a odio commodo, quis laoreet ante lobortis. Pellentesque massa ipsum, euismod et dolor quis, consectetur iaculis magna. Ut ut lectus sem. Proin lobortis vitae arcu eget pretium.

                        Mauris pretium metus vel metus pretium, iaculis sodales diam gravida. Donec feugiat purus sit amet erat faucibus dictum. Phasellus volutpat, turpis ut sollicitudin dignissim, erat orci vulputate ante, eget consectetur lacus sem ut lacus. Duis posuere at ex quis accumsan. Mauris blandit massa lacinia metus feugiat egestas. Curabitur id purus ipsum. Quisque imperdiet, risus at pulvinar dignissim, odio tellus imperdiet lorem, vitae scelerisque enim ligula vitae ipsum. In hac habitasse platea dictumst. Pellentesque pellentesque at sem eget accumsan.

                        Donec accumsan condimentum orci non dictum. Sed ut turpis nunc. Aliquam rhoncus libero diam, ac porta risus aliquam at. Maecenas sit amet convallis orci. Curabitur viverra mollis nunc, a consectetur odio ultricies sed. Duis vitae blandit nunc. Sed tempor vulputate arcu. In euismod placerat venenatis. Aenean eleifend blandit massa vel feugiat. Nulla et purus tempor, pulvinar ligula sed, mollis ante. Quisque pretium ligula fermentum erat volutpat vehicula. Sed dignissim ipsum varius, placerat quam at, faucibus tellus.

                        Cras lobortis est id consequat suscipit. Donec mattis eget nunc ac sagittis. Maecenas egestas elementum mauris, ut ornare augue rutrum vitae. Ut tempor risus eu tincidunt luctus. Duis tincidunt at velit vitae auctor. Curabitur in congue ligula, eu sagittis turpis. Sed egestas est vehicula, egestas erat sit amet, condimentum elit. Vivamus mattis congue convallis. Donec ac pharetra urna. Curabitur at dui massa. Curabitur sed felis non dolor elementum iaculis. Quisque turpis nulla, luctus eget risus ut, tincidunt rhoncus ante. Donec non sagittis odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vel pellentesque odio, vitae suscipit lorem.

                        Cras at velit dignissim, tincidunt purus at, vulputate elit. Integer consectetur fringilla ornare. Etiam scelerisque elementum massa, ut ultrices neque semper sed. Duis porttitor lectus turpis, eu euismod leo pharetra vel. Duis risus ante, congue eget imperdiet non, elementum ut lectus. Nunc lobortis leo eget dolor lobortis, non posuere enim tristique. Vestibulum at vulputate ligula, ac posuere quam. Curabitur laoreet mollis eros id lobortis. Vestibulum sodales turpis sed rhoncus congue. Proin et nulla purus.

                    </p>
                </Suspense>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Suspense fallback={<p>Loading UI ...</p>}>
                    <p id="tjis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis officia quis alias, voluptas necessitatibus sapiente vitae dolore, consectetur expedita nemo iusto mollitia vel modi reprehenderit dolores doloremque perspiciatis nostrum?</p>
                </Suspense>
            </section>
        </>
    )
}