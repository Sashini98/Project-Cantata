import React from "react";
import { Tabs } from "./tabs/Tabs";
import Test1 from "./Components/Test1";
import Test2 from "./Components/Test2";

function NavTab() {
    return (
        <div class="tabs is-fullwidth is-boxed"><br></br>
            {/* <ul>
            <li>
                <a>                                   
                    <span>Manage Users</span>
                </a>
            </li>
            <li>
                <a>                                   
                    <span>Active Users</span>
                </a>
            </li>
            <li>
                <a>                                    
                    <span>Deactive Users</span>
                </a>
            </li>
            
        </ul> */}

            <section className="section">
                <h1 className="title">Bulma Tabs Example</h1>
                <h2 className="subtitle">
                    with React, TypeScript, hooks and context API
                </h2>

                <Tabs defaultTabId="quote2">
                    <Tabs.TabList isSize="medium">
                        <Tabs.Tab tabId="quote1">Quote 1</Tabs.Tab>
                        <Tabs.Tab tabId="quote2">Quote 2</Tabs.Tab>
                        <Tabs.Tab tabId="quote3">Quote 3</Tabs.Tab>
                    </Tabs.TabList>

                    <Tabs.TabPanel tabId="quote1">
                        <div className="box">
                            Your bones don&apos;t break, mine do. That&apos;s clear. Your cells
                            react to bacteria and viruses differently than mine. You don&apos;t
                            get sick, I do. That&apos;s also clear. But for some reason, you and
                            I react the exact same way to water. We swallow it too fast, we
                            choke. We get some in our lungs, we drown. However unreal it may
                            seem, we are connected, you and I. We&apos;re on the same curve,
                            just on opposite ends.
                        </div>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel tabId="quote2">
                        <div className="box">
                            Look, just because I don&apos;t be givin&apos; no man a foot massage
                            don&apos;t make it right for Marsellus to throw Antwone into a glass
                            motherfuckin&apos; house, fuckin&apos; up the way the nigger talks.
                            Motherfucker do that shit to me, he better paralyze my ass,
                            &apos;cause I&apos;ll kill the motherfucker, know what I&apos;m
                            sayin&apos;?
                        </div>
                    </Tabs.TabPanel>
                    <Tabs.TabPanel tabId="quote3">
                        <div className="box">
                            Do you see any Teletubbies in here? Do you see a slender plastic tag
                            clipped to my shirt with my name printed on it? Do you see a little
                            Asian child with a blank expression on his face sitting outside on a
                            mechanical helicopter that shakes when you put quarters in it? No?
                            Well, that&apos;s what you see at a toy store. And you must think
                            you&apos;re in a toy store, because you&apos;re here shopping for an
                            infant named Jeb.
                        </div>
                    </Tabs.TabPanel>
                </Tabs>
            </section>
        </div>
    )
}

export default NavTab;
