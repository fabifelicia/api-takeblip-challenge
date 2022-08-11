
function apiFiltered(repository) {
  const repoFiltered = []
  repository.filter(repo => {
    if (repo.language === 'C#') {
      repoFiltered.push({
        name: repo.full_name,
        description: repo.description,
        avatar: repo.owner.avatar_url,
        created: repo.created_at
      })
    }
  })  
  return repoFiltered
}

module.exports = { apiFiltered };