## Contributors
We are always excited to have contributions from the community - especially from new contributors!
We are interested in accepting contributions of code, as well as documentation and even artwork that can be applied as icons or styling to the application.

#### Getting started...
NiFi's JIRA page can be used to find tickets:  

[NiFi Flow Design System Unassigned Issues](https://issues.apache.org/jira/issues/?filter=12331670&jql=project%20%3D%20NIFI%20AND%20resolution%20%3D%20Unresolved%20AND%20component%20%3D%20FDS%20AND%20assignee%20in%20(EMPTY)%20ORDER%20BY%20priority%20DESC)

#### Create a ticket for new bugs or features
Run into a bug or think there is something that would benefit the project?  Regardless if you have the time to provide the fix or implementation, we encourage any such items to be filed as an issue at the Apache NiFi JIRA.

#### Providing contributions
The source is hosted at https://git-wip-us.apache.org/repos/asf/nifi-fds.git

Like all Apache projects, a mirror of the git repository is also located on GitHub at https://github.com/apache/nifi-fds which provides ease in forking and generating pull requests (PRs).

#### Configure your git client
Ensure your git user name and email are configured
 The following lines ensure your commits are appropriately annotated with your information
```bash
git config --global user.name "User Name"
git config --global user.email user.name@email.org
```
 
##### Windows Specific configuration
The following options provide handling of long file paths that can be troublesome as well as not using Windows style line returns.
```bash
git config --global core.longpaths true
git config --global core.autocrlf false
```
 
#### Clone a copy of the repository
From the Apache Hosted Repository
```bash
git clone https://git-wip-us.apache.org/repos/asf/nifi-fds.git
```

From the GitHub Mirror
```bash
git clone https://github.com/apache/nifi-fds.git
```

From your GitHub Fork
```bash
git clone git@github.com:<account name>/nifi-fds.git
```

#### Retrieval of upstream changes
Additionally, it is beneficial to add a git remote for the mirror to allow the retrieval of upstream changes
```bash
git remote add upstream https://github.com/apache/nifi.git
```

### The NiFi community uses a modified Gitflow development model.  A summary:
* Use of a central repository
* Branch per feature similar to the Feature Branch Workflow
* Work is done locally and then pushed to the central repo
* 'master' branch contains the official release history.  Code changes (not code formatting, administrative updates) require Review-Then-Commit (RTC) by another committer to get incorporated.

Apache NIFI has a Review-Then-Commit (RTC) philosophy for handling all contributions.  Reviewers first ensure that the code applies and builds appropriately.  From here, code is evaluated to ensure best practices within the NiFi FDS are applied and, where applicable, that the user experience of interfacing with the contribution is consistent and any changes are backwards compatible.  This process may be iterative but works toward a final product that is then merged into the codebase. 

While only committers can actively promote contributions into the repository, feedback on issues, regardless of committer status, is appreciated and valued in the review process.

If you are interested in facilitating the review process, a listing of all code contributions with a patch are available via a JIRA filter, NIFI Patch Available.
