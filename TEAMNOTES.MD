# Team Notes

## Project Requirements
- Built based on card comp ✓
- Have 4 elements of Icon, Header/Banner, Card, & Scaffold ✓
- 1 element must inherit from SimpleColors ✓
- Use slot tags ✓
- 3 demonstrations in the index.html for the card demo ✓
- Card demo must include all elements with different implementations to them ✓
- Demo must use our button tag, with slot capabilities ✓
- 3 variations in the storybook
- 1 test per element, so 4 total 
- Test should vary and can be for accessibility, attribute evaluation, or slot testing
- Published to NPM by the due date of Nov. 2nd 

## Meeting Notes


### Meeting Date: 11/2

#### What we did:


#### What we'll do next:


### Meeting Date: 10/28

#### What we did:
We listened to Bryan answer the specific questions of PenStat and 3B4B at the beginning of class. Then we got to work on our own card and Liz specifically worked on getting the accessibility to work for all of our elements. While Nick and Adam were working on getting the tests working. Finally I was working on the teamnotes and storybook.

#### What we'll do next:
We plan to continue to work on getting all the requirements of the card done for Tuesday.

### Meeting Date: 10/26

#### What we did:
Today Bryan showed us a little bit on how to run tests, as well as how to perform and modify those tests to work for our elements. After that, we did a group activity where Liz and I shared our group repo with Viable Slime, while two members of Viable Slime shared theirs with us. Nick was also doing this with the team to our left.

#### What we'll do next:
Our next steps are going to be continuing to improve our card. We will do this by listening to the other team's feedback, as well as double-checking that we have all the requirements for this project.

### Meeting Date: 10/21

#### What we did: 
Today we listened to Bryan talk about what a linter is and why it is causing some people to be unable to commit to their group's repo. Then, He also talked about how to implement fonts using Google Font since another team was struggling with it. Finally, he talked about our team's code and how it is working well, and some of the things we can improve within our card. Some of the feedback Bryan gave us with what is work for our card the design of our card is great, that adding in the CSS variable within our render function is a great idea, and that repurposing our work from our button from the last project is a very smart thing to do. Some ways he said we could improve upon our card was to use slots, as well as to fix the error that was causing our project not to render.

#### What we'll do next:
Our next steps are going to be to continue working on improving our card and its elements, as well as write our individual blog posts that are due this Sunday.

### Meeting Date: 10/19

#### What we did:
We listened to the guest presenter Chuck Lavera walk us through his solution for the card comp project. As well as listening to Bryan critique The Table In The Corner and a few other group's card comps.

What approaches can you leverage from his example to enhance your team's element?
- The approaches our team could leverage from Chuck's example are how he uses CSS variables to handle the color-changing between the different card colors for the different elements of the card. Another approach our team could leverage from Chuck is how he used rendering to get the different parts of the card to work in the ways we need them to while also using slotting.

How could you take his approach and envision a more flexible version?
- Taking Chuck's approach on responsive design for the cards, my team could make it more flexible by using a different method that makes it more granular as Bryan talked about.

#### What we'll do next:
We plan to work on continue working on getting our card to look like the comp as well as take the things we learned from Chuck and the other groups and try to implement them in our project.

### Meeting Date: 10/14

#### What we did:
We listened to Bryan show us SimpleColors so then we don't have to look up the hex code for the colors we want. It also has the accent and dark mode for the colors we pick.

#### What we'll do next:
We plan to work on getting the icon and banner working for this Sunday's check-in.

### Meeting Date: 10/12

#### What we did:
We listened to Bryan give feedback for our project 1 buttons, as well as what performance optimization techniques that we might want to use for our second project. We also worked on getting our started card.

#### What we'll do next:
We plan to work on the two articles we need to read for Thursday, as well as continuing our progress on our card.

### Meeting Date: 10/7

#### What we did:
We listened to Bryan talk about the parts of the project 2 repo, as well as what we needed to write our blog post about. We also worked on the first check in for this project which is located below.

#### What we'll do next:
We plan to work on getting our individual blog posts and our group check-in 1 done by this Sunday. As well as assign responsibilities to each person on our team.

### Meeting Date: 10/5

#### What we did: 
In-Class Activity: 

What are the characteristics of the card?
- An icon
- Color banner
- Header/sub-header
- Context body

What design considerations must we take into account?
- Size of card
- Color
- Responsiveness
- Font alignment
- Margins
- Heading overflow

What accessibility concerns do we potentially have?
- Contrast
- Tabbing to content
- Heading order
- Different languages
- Font size
- Color choices

What security concerns do we potentially have?
- Flex ability security

What "states" does this card have?
- Hover
- Click to show
- Type of card

What do we call it?
- We call it rteme-card

What areas do we need to account for flexible content/HTML entry of any kind?
- Headings
- Icon
- Body
- Body Text 

Do we have room for additional reusable atoms to be produced? (there are 4 total by my count)
- Icon
- Heading
- Body
- Card

What should we call each of them?
- rteme-Icon
- rteme-Header
- rteme-Body
- rteme-Card

#### What we'll do next:
Continue to learn more about how to create a card in Thursday's class.

## Status Check-Ins


### Check-in 1
Element Names:
- lc_icon
- lc_banner
- lc_scaffold
- lc_card

Proporties:
- Color
- Size
- Margins
- States

Design Considerations:
- Contrast
- Scalibility

Next Steps: We plan to work on getting our individual blog posts and our group check-in 1 done by this Sunday. As well as assign    
            responsibilities to each person on our team.

### Check-in 2
What did you take away from the portion of class about implementing SimpleColors?
- We listened to Bryan show us SimpleColors so then we don't have to look up the hex code for the colors we want. It also has the accent and dark mode for the colors we pick. We tried to do the dynamic import in class, but it wasn't rendering correctly. We couldn't get the header to be a seperate file and then slot it into our NHL card.

What did you learn from other groups?
- We learned that we are in the same boat as other teams, where we are getting started and trying to figure out how to get all the elements to work the way we want them too.

What are your next steps?
- Our next steps are to get the icon to have basic API rendering, as well as the banner having API that supports two name slots and implements the icon. 
- Liz wasn't able to make progress due to hockey games this past weekend, but she will be working on tomorrow morning and plans to post progress tomorrow(10/19). Liz plans to get everything rendering correctly and then properly format the visuals while making everything reusable. The header/banner should have progress tomorrow(10/19).

### Check-in 3
Progress:
- So far we have the design of the card how we want it to look as it matches the comp. We just need to add the specific content into the different elements within our card, as well as continue to improve our card and its different elements to get it working even better and how we want it to work.

Problems:
- A problem we were facing was our card not rendering because of an error with us using the custom element of the card header tag being used twice which make our card not render.

Next Steps:
- Our next steps are going to be to continue working on improving our card and its elements so we, as well as write our individual blog posts that are due this Sunday.

### Check-in 4
Questions:
- How do we wrap the different elements?
- What improvements do you think need to be made?
- How to properly have `app.test.js` see the `.cardBanner` Div to be able to test the contents of the headers?
- Our group will probably come up with other questions we will ask Tuesday
