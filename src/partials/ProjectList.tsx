import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <a className="flex flex-col gap-6">
      <Project
        name="Neovim Config"
        description="I use neovim as my 'IDE'. Check out my config here."
        link="https://github.com/LucasHimself01/neovim"
        img={{
          src: '/assets/images/neovim-icon.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Neovim</Tags>
          </>
        }
      />
    </a>
  </Section>
);

export { ProjectList };
